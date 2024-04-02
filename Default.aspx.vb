Imports System
Imports System.Net
Imports System.Data
Imports System.Data.SqlClient
Imports System.Configuration
Imports System.IO
Imports System.Text
Partial Class clt_zen_Default
    Inherits System.Web.UI.Page

    Public ClientCode As String = ""
    Public cAccessLevel As String = ""
    Public cClientCode As String = ""
    Public CS As ClientSetup
    Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
        Me.MasterPageFile = "/sn/masterpages/uncc_h.master"
    End Sub
    Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles MyBase.Load

        Response.Redirect("/sn/clt/zen/index.html")

        ClientCode = "zen"
        CS = New ClientSetup(ClientCode)

        cAccessLevel = UCase(GetCookie("AccessLevel"))
        cClientCode = GetCookie("ClientCode")
        'litLeft.Text = getTextFile("d:/clt/uno/txt/home_left.txt")
        
    End Sub
    Public Function GetCookie(ByVal mCookie)
        Dim MCV As String = ""
        If Not Request.Cookies(mCookie) Is Nothing Then
            Dim aCookie As HttpCookie = Request.Cookies(mCookie)
            MCV = Server.HtmlEncode(aCookie.Value)
        End If
        Return MCV
    End Function
    Public Function getTextFile(ByVal myFile) As String
        Try
            Dim objStreamReader As StreamReader
            objStreamReader = File.OpenText(myFile)
            Dim contents As String = objStreamReader.ReadToEnd()
            'Very Important to Close!!!!!!!!
            objStreamReader.Close()
            Return contents
        Catch ex As Exception
            Return ""
        End Try
    End Function
End Class
