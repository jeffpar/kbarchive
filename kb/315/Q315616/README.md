---
layout: page
title: "Q315616: HOW TO: Detect a Client Language in an ASP Page in IIS"
permalink: /kb/315/Q315616/
---

## Q315616: HOW TO: Detect a Client Language in an ASP Page in IIS

{% raw %}

	Article: Q315616
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Detect the Client Language in an ASP Page
	- Test the Sample
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to use Active Server Pages (ASP) to test
	the value of HTTP_ACCEPT_LANGUAGE and return a greeting in an appropriate
	language.
	
	ASP pages generate dynamic content at the Web server and return the content to
	the Web browser. An ASP page can return different content, depending on the type
	of browser that made the request. Similarly, an ASP page can return different
	content that is based on the natural language that is selected in the browser.
	
	You can use ASP to detect the default natural language that is selected at the
	browser. This information is held in an HTTP header variable named
	HTTP_ACCEPT_LANGUAGE. For example, the value "es-mx,fr,de-ch,en-us" means that
	the browser accepts the following languages, in order of preference:
	
	- Spanish (Mexico)
	
	- French (France)
	
	- German (Switzerland)
	
	- English (United States)
	
	Requirements
	------------
	
	The following items describe the recommended hardware, software, network
	infrastructure, skills and knowledge, and service packs that you need:
	
	- Microsoft Internet Explorer 3.0 or later
	
	- Basic knowledge of ASP
	
	Detect the Client Language in an ASP Page
	-----------------------------------------
	
	1. Open a text editor such as Notepad.
	
	2. Paste the following code in the file:
	
	  <%@ LANGUAGE="VBSCRIPT" %>
	  <% Option Explicit %>
	  <%
	  Dim userLocale
	  userLocale = request.servervariables("HTTP_ACCEPT_LANGUAGE")
	
	The <% delimiter marks the start of Visual Basic Scripting Edition (VBScript)
	code. The code retrieves the HTTP_ACCEPT_LANGUAGE variable from the HTTP
	header.
	
	3. Add the following code to display the HTTP_ACCEPT_LANGUAGE variable in the
	  browser for diagnostic purposes:
	
	  Response.Write "Language string: <B>" & userLocale & "</B><BR><BR>"
	
	4. Add the following code to split the HTTP_ACCEPT_LANGUAGE variable into an
	  array of substrings. Each substring holds one language choice, such as es-mx:
	
	  Dim languages
	  languages = Split(userLocale, ",", -1)
	
	5. Add the following code to test the language choices and return a greeting in
	  German, French, Spanish, or English:
	
	  Dim language
	  For Each language in languages
	    If InStr(language, "de") <> 0 Then          ' Any kind of German?
	      Response.Write "Guten Tag"               ' Return German greeting
	      Response.End
	    ElseIf InStr(language, "fr") <> 0 Then      ' Any kind of French?
	      Response.Write "Bonjour"                  ' Return French greeting
	      Response.End
	    ElseIf InStr(language, "es") <> 0 Then      ' Any kind of Spanish?
	      Response.Write "Hola"                      ' Return Spanish greeting
	      Response.End
	    ElseIf Instr(language,"en-us") <> 0 Then  'US English?
	      Response.Write "Hello"
	      Response.End
	    End If
	  Next
	
	6. Add a delimiter to terminate the VBScript in the ASP page, as follows:
	
	  %>
	
	7. Save the file as Sayhello.asp in the default Web folder on your computer
	  (this is usually C:\Inetpub\Wwwroot).
	
	Test the Sample
	---------------
	
	1. Start Internet Explorer.
	
	2. On the Tools menu, click Internet Options.
	
	3. In the Internet Options dialog box, click the General tab and then click
	  Languages.
	
	4. In the Language Preference dialog box, view the languages that your browser
	  already accepts.
	
	5. Click Add. Select another language from the list, such as Spanish, French, or
	  German, and then click OK.
	
	6. In the Language Preference dialog box, select the language that you just
	  added. Click Move Up several times to move the language to the top of the
	  list. This makes this language the preferred language for your browser. Click
	  OK to accept these language preferences.
	
	7. In the Address field in Internet Explorer, type "localhost/SayHello.asp"
	  (without the quotation marks).
	
	8. Verify that the ASP page returns a greeting in your preferred language. Also
	  observe the value of the HTTP_ACCEPT_LANGUAGE variable, which is displayed at
	  the start of the page.
	
	9. Select a different language preference in Internet Explorer and press F5 to
	  run the ASP page again. Verify that the ASP page returns an appropriate
	  greeting.
	
	REFERENCES
	==========
	
	For more information about localization issues with scripting, see the following
	Microsoft Developer Network (MSDN) Web site:
	
	  It's All Greek to Me
	  http://msdn.microsoft.com/workshop/languages/clinic/scripting080999.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
