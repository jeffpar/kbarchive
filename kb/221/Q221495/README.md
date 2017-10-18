---
layout: page
title: "Q221495: HOW TO: Create Scheduled E-mail Messages by Using WSH and CDONTS"
permalink: kb/221/Q221495/
---

## Q221495: HOW TO: Create Scheduled E-mail Messages by Using WSH and CDONTS

	Article: Q221495
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Verify that the Scheduler Service is Running
	- Create the Mail File
	- Create the WSH Script
	- Create a Task to Schedule the Mail-Out to Be Sent
	
	- REFERENCES
	
	SUMMARY
	=======
	
	By default, Microsoft Windows NT 4.0 with the Windows NT Option Pack (NTOP) and
	Microsoft Windows 2000 install a Simple Mail Transfer Protocol (SMTP) service
	that can be used for a variety of purposes. One of the more common uses is
	Active Server Pages (ASP) for e-mail-based HTML form handling.
	
	This step-by-step article describes how to create scheduled mail-outs by using
	Windows Script Host (WSH) and the e-mail features of the SMTP service
	CDONTS.NewMail object. The example shows how to create a text file that you can
	update for the e-mail message contents, a WSH script to send an e-mail message,
	and a scheduled task to schedule the e-mail message to be sent.
	
	Verify that the Scheduler Service Is Running
	--------------------------------------------
	
	- On a computer that is running Windows NT 4.0 and Internet Information Server
	  (IIS) 4.0:
	
	  1. Click Start, click Settings, and then click Control Panel.
	
	  2. In Control Panel, double-click Services.
	
	  3. Scroll down to the Task Scheduler service.
	
	  4. Verify that Status indicates Started. If Status is not set to Started,
	     click to select Task Scheduler and then click Start.
	
	  5. Verify that Startup indicates Automatic. If Startup is not set to
	     Automatic, click to select Task Scheduler and then click Startup. Under
	     Startup Type, click to select Automatic, and then click OK.
	
	  6. Click Close.
	
	  7. To exit, close Control Panel.
	
	- On a computer that is running Windows 2000 and Internet Information Services
	  (IIS) 5.0:
	
	  1. Click Start, click Settings, and then click Control Panel.
	
	  2. Double-click Administrative Tools, and then double-click Computer
	     Management.
	
	  3. In the left pane of the Computer Management window, expand Services and
	     Applications, and then click to select Services.
	
	  4. In the right pane of the Computer Management window, scroll through the
	     list of services in the Name column.
	
	  5. Scroll down to the Task Scheduler service.
	
	  6. Verify that Status indicates Started. If the service is not started,
	     right-click the Task Scheduler service, and then click to select Start.
	
	  7. Verify that Startup Type indicates Automatic. If Startup Type is not set
	     to Automatic, right-click the Task Scheduler service, and then click
	     Properties. The <service_name> window appears with the General tab
	     selected. Note that you can click the other tabs at the top of the window
	     to see other options. Click the drop-down arrow next to Startup type, and
	     then select Automatic.
	
	  8. Click OK.
	
	  9. To exit, close the Computer Management window.
	
	Create the E-Mail File
	----------------------
	
	1. Open Notepad. To do this, click Start, click Run, type NOTEPAD, and then
	  click OK.
	
	2. Paste the following lines in Notepad:
	
	  <p>This is line 1.</p>
	  <p>This is line 2.</p>
	
	3. In Notepad, click the File menu, click Save As, type C:\Mailout.txt in the
	  File name text box, and then click OK.
	
	4. To exit, close Notepad.
	
	Create the WSH Script
	---------------------
	
	1. Open Notepad. To do this, click Start, click Run, type NOTEPAD, and then
	  click OK.
	
	2. Paste the following lines in Notepad:
	
	NOTE: You must specify a valid e-mail address. To do this, customize the sender
	and receiver by changing the value of the strFrom and strTo variables in the
	following code:
	
	  '--------------------------------------------------------------------
	  '
	  ' Mailout using CDONTS.NewMail
	  '
	  '--------------------------------------------------------------------
	
	  ' Declare all variables.
	  Option Explicit
	  Dim objSendMail
	  Dim strTo, strFrom
	  Dim strSubject, strBody
	
	  ' Mail constants (some are for reference).
	  Const CdoBodyFormatHTML = 0 ' Body property is HTML
	  Const CdoBodyFormatText = 1 ' Body property is plain text (default)
	  Const CdoMailFormatMime = 0 ' NewMail object is in MIME format
	  Const CdoMailFormatText = 1 ' NewMail object is plain text (default)
	  Const CdoLow    = 0         ' Low importance
	  Const CdoNormal = 1         ' Normal importance (default)
	  Const CdoHigh   = 2         ' High importance
	
	  strFrom    = "someone@microsoft.com"  ' Change to your e-mail address.
	  strTo      = "someone@microsoft.com"  ' Change to the recipient address.
	  strSubject = "Test Message"          ' Change to your subject.
	
	  ' This line calls the ReadFile() function to read the page contents.
	  strBody = ReadFile("C:\MAILOUT.TXT")
	
	  ' This line calls the MakePage() function to format the page as HTML.
	  strBody = MakePage(strSubject,strBody)
	
	  ' The following section creates the mail object and sends the mail.
	  Set objSendMail = CreateObject("CDONTS.NewMail")
	  	objSendMail.From    = strFrom
	  	objSendMail.To      = strTo
	  	objSendMail.Subject = strSubject & " (" & Date() & ")"
	  	objSendMail.Body    = strBody
	
	  	objSendMail.BodyFormat = CdoBodyFormatHTML
	  	objSendMail.MailFormat = CdoMailFormatMime
	  	objSendMail.Importance = CdoNormal
	
	  	objSendMail.Send
	  Set objSendMail = Nothing
	
	  ' This function returns a properly formatted HTML page.
	  Function MakePage(txtSubject, txtBody)
	  	Dim txtTemp
	  	txtTemp = "<HTML>" & vbCrLf
	  	txtTemp = txtTemp & "<HEAD><TITLE>"
	  	txtTemp = txtTemp & txtSubject
	  	txtTemp = txtTemp & "</TITLE></HEAD>" & vbCrLf
	  	txtTemp = txtTemp & "<BODY>" & vbCrLf
	  	txtTemp = txtTemp & "<H2>" & txtSubject & "</H2>" & vbCrLf
	  	txtTemp = txtTemp & txtBody & vbCrLf
	  	txtTemp = txtTemp & "</BODY>" & vbCrLf
	  	txtTemp = txtTemp & "</HTML>"
	  	MakePage = txtTemp
	  End Function
	
	  ' This function opens a file and returns the contents of the file.
	  Function ReadFile(txtFile)
	  	Dim txtTemp, objFS, objFL
	  	Set objFS = CreateObject("Scripting.FileSystemObject")
	  	Set objFL = objFS.OpenTextFile(txtFile)
	  	Do While Not objFL.AtEndOfStream
	  		txtTemp = txtTemp & objFL.ReadLine
	  		txtTemp = txtTemp & vbCrLf
	  	Loop	
	  	objFL.Close
	  	Set objFS = Nothing
	  	ReadFile = txtTemp
	  End Function
	
	3. In Notepad, click the File menu, click Save As, type "C:\mailout.vbs"
	  (without the quotation marks) in the File name text box, and then click OK.
	
	4. To exit, close Notepad.
	
	Create a Task to Schedule the Mail-Out to Be Sent
	-------------------------------------------------
	
	1. Click Start, click Run, type CMD, and then click OK to open a command prompt.
	
	2. At the command prompt window, type something similar to the following
	  examples:
	
	   - The following task runs one time at 9:00 P.M.
	
	  AT 9:00pm Cscript.exe C:\Mailout.vbs
	
	   - This task runs every Monday at 6:00 A.M.
	
	  AT 6:00am /every:M Cscript.exe C:\Mailout.vbs
	
	   - This task runs on the first of every month at 1:00 A.M.
	
	  AT 1:00am /every:1 Cscript.exe C:\Mailout.vbs
	
	NOTE: Depending on which of these examples you choose, the e-mail message is sent
	at the scheduled time.
	
	3. Type "EXIT" (without the quotation marks) to close the command prompt.
	
	REFERENCES
	==========
	
	For more information about Microsoft scripting technologies, visit the following
	Microsoft Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/scripting/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
