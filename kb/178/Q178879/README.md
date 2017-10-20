---
layout: page
title: "Q178879: WD97: Run-Time Error '4599' Using DDE to Internet Explorer 4.x"
permalink: /kb/178/Q178879/
---

## Q178879: WD97: Run-Time Error '4599' Using DDE to Internet Explorer 4.x

{% raw %}

	Article: Q178879
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbwordvba
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions of Microsoft Internet Explorer earlier than Microsoft Internet
	Explorer version 4.x, dynamic data exchange (DDE) commands could be used to
	extract the Uniform Resource Locator (URL) address from the browser. For
	instance, the following sample Microsoft Visual Basic for Applications code
	would display the URL address in a message box:
	
	     Sub ShowUrl()
	        IEchannel = DDEInitiate("iexplore", "www_getwindowinfo")
	        Info = DDERequest(IEchannel, "dogetwindowinfo")
	        MsgBox Info
	        DDETerminateAll
	     End Sub
	
	This code no longer works with Microsoft Internet Explorer version 4.x and
	returns the following error message:
	
	  Run-time error '4599': Process failed in other application
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The following sample Visual Basic code displays the URL address for each window
	displayed in the Microsoft Internet Explorer browser:
	
	     Sub FindIE40Url()
	        Dim IEWindows As New SHDocVw.ShellWindows
	        Dim oIE As SHDocVw.InternetExplorer
	        On Error GoTo errorhandler
	        For Each oIE In IEWindows
	           MsgBox "Caption: " & oIE.LocationName & vbCr & "URL: " _
	              & oIE.LocationURL
	        Next
	     errorhandler:
	        If Err <> 0 then
	           MsgBox " Microsoft Internet Explorer must be running" _
	              & " for this code to work."
	        End If
	     End Sub
	
	Note: For this code to work, you must reference the "Microsoft Internet
	Controls." To add the "Microsoft Internet Controls" reference, follow these
	steps:
	
	1. In the Visual Basic Editor, click References on the Tools menu.
	
	  The References dialog box shows all object libraries and projects that are
	  registered with the operating system.
	
	2. In the Available References list, scroll down to find "Microsoft Internet
	  Controls."
	
	3. Click to select the "Microsoft Internet Controls" check box, and then click
	  OK.
	
	MORE INFORMATION
	================
	
	For more information about the Microsoft Internet Explorer 3.x Automation
	object, please see the "Web Browse Objects" documentation available at the
	following Microsoft World Wide Web site:
	
	  http://www.microsoft.com/intdev/sdk
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	You can also obtain information about the Microsoft Internet Explorer 3.x
	Automation object by searching on "InternetExplorer Object" (without the
	quotation marks) in the ActiveX SDK online documentation.
	
	For Microsoft Internet Explorer 4.x, refer to the "Reusing the WebBrowser
	Control" in the "Internet Tools and Technologies" book of the Internet Client
	SDK documentation, or search on "InternetExplorer" (without the quotation marks)
	in the Internet Client SDK documents index.
	
	The Internet Client Software Development Kit (SDK) provides the necessary tools,
	samples, and documentation for authoring content for the Web and the desktop,
	for developing controls and components, and for writing applications for the
	Internet. This SDK also allows you to take advantage of technology provided by
	Microsoft Internet Explorer version 4.x.
	
	For more information about the Internet Client SDK, please see the following
	Microsoft World Wide Web sites:
	
	  http://www.microsoft.com/msdn/sdk/
	
	  -and-
	
	  http://www.microsoft.com/intdev/sdk/
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba
	
	======================================================================
	Keywords          : kbcode kbProgramming kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
