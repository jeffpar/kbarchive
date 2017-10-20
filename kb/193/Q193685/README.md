---
layout: page
title: "Q193685: Sending E-mail from a Command Prompt Using IIS SMTP Service"
permalink: /kb/193/Q193685/
---

## Q193685: Sending E-mail from a Command Prompt Using IIS SMTP Service

{% raw %}

	Article: Q193685
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Option Pack (NTOP) includes a Simple Mail Transfer Protocol
	(SMTP) service for Internet Information Server (IIS). Also included in the
	Option Pack is the Windows Script Host (WSH), which is a powerful batch
	processing language interpreter, allowing administrators to write scripts in
	Visual Basic Script (VBS) or JScript (JS). Together the SMTP service and WSH can
	be used to send e-mail from a command line.
	
	MORE INFORMATION
	================
	
	With the SMTP service installed, a new system object named "CDONTS.NewMail" can
	be used to send mail with a few lines of code.
	
	The following example using VBS and WSH demonstrates how to send -email from a
	command prompt. Save the code shown below as SENDMAIL.VBS, open a command prompt
	session. and call the code using the following syntax:
	
	  CSCRIPT.EXE SENDMAIL.VBS -?
	
	This will return the Help screen that shows the syntax for using the script. This
	script can be used inside batch files, or for other purposes such as sending
	alerts from Performance Monitor.
	
	Save the following VBS code as SENDMAIL.VBS:
	
	     '--------------------------------------------------
	     '
	     ' Sends email from the local SMTP service using CDONTS objects
	     '
	     ' Usage:
	     '   sendmail -t <to> -f <from> -s "<subject>" -b "<message>"
	     '   sendmail [-help|-?]
	     '
	     '--------------------------------------------------
	
	     Option Explicit
	     On Error Resume Next
	
	     Dim objSendMail, oArgs, ArgNum
	     Dim strTo, strFrom, strSubject, strBody
	
	     Set oArgs = WScript.Arguments
	     ArgNum = 0
	
	     While ArgNum < oArgs.Count
	        Select Case LCase(oArgs(ArgNum))
	           Case "-to","-t":
	              ArgNum = ArgNum + 1
	              strTo = oArgs(ArgNum)
	           Case "-from","-f":
	              ArgNum = ArgNum + 1
	              strFrom = oArgs(ArgNum)
	           Case "-subject","-s":
	              ArgNum = ArgNum + 1
	              strSubject = oArgs(ArgNum)
	           Case "-body","-b":
	              ArgNum = ArgNum + 1
	              strBody = oArgs(ArgNum)
	           Case "-help","-?":
	              Call DisplayUsage
	           Case Else:
	              Call DisplayUsage
	        End Select
	        ArgNum = ArgNum + 1
	     Wend
	
	     If oArgs.Count=0 Or strTo="" Or strFrom="" Or _
	           strSubject="" Or strBody="" Then
	        Call DisplayUsage
	     Else
	        Set objSendMail = CreateObject("CDONTS.NewMail")
	           objSendMail.From = strFrom
	           objSendMail.To = strTo
	           objSendMail.Subject = strSubject
	           objSendMail.Body = strBody
	           objSendMail.Send
	        Set objSendMail = Nothing
	     End If
	
	     ' Display the usage for this script
	     Sub DisplayUsage
	        WScript.Echo "Usage:"
	        WScript.Echo "  sendmail -t <to address> -f <from address> -s " & _
	           Chr(34) & "<subject>" & Chr(34) & " -b " & Chr(34) & _
	           "<message body>" & Chr(34)
	        WScript.Echo "  sendmail [-help|-?]"
	        WScript.Echo ""
	        WSCript.Quit
	     End Sub
	
	Additional query words: IIS SMTP VBS JS CDONTS
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
