---
layout: page
title: "Q146641: HOWTO: Use OLE Messaging to Send Mail in Visual FoxPro App"
permalink: /kb/146/Q146641/
---

## Q146641: HOWTO: Use OLE Messaging to Send Mail in Visual FoxPro App

	Article: Q146641
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbActMsg kbAutomation kbvfp300 kbvfp500 kbvfp600
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how you can use OLE Messaging as an alternative to
	using a MAPI Session and MAPI Messages .ocx controls to send mail. This
	functionality relies on MAPI OLE Automation support at the operating system
	level but doesn't require that an .ocx file be added to a form. The MAPI .ocx
	files currently available use Simple MAPI as opposed to MAPI 1.0, so they are
	superseded by this.
	
	MORE INFORMATION
	================
	
	The OLE Messaging Library is installed with the MAPI Software Development Kit
	(SDK). When the OLE Messaging Library is available, the following flag is set in
	the Win.ini file:
	
	     [Mail]
	     OLEMessaging=1
	
	And it can be found in the registry. Under Windows 95 and Windows NT 4.0 you will
	find it in:
	
	  HKEY_Local_Machine\SOFTWARE\Microsoft\Windows Messaging Subsystem.
	
	Sample Code Showing How to Get This to Work
	-------------------------------------------
	
	     *==== Beginning of OLE Messaging Program.
	
	     SESSION=CREATEOBJECT('mapi.session') && Create the MAPI object.
	     SESSION.LOGON                        && Logon to mail; With exchange it
	                                          && will prompt for a profile.
	
	     NEW=SESSION.OUTBOX.MESSAGES.ADD             && Create a new message.
	     NEW.SUBJECT = "Test Mail with OLE Messaging"   && Add a message subject.
	     NEW.TEXT="Mail System Test"+CHR(13)+"using OLE!" && Actual message text.
	
	     SENDTO=NEW.RECIPIENTS.ADD    && Add a recipient object
	     SENDTO.NAME="myemailaddr"    && Email address to mail message to
	     SENDTO.TYPE=1                && 1= "TO:"; 2="CC:"; 3="BCC:"
	     SENDTO.RESOLVE               && Looks up address in addressbook.
	
	     NEW.UPDATE       && Required to save changes to a message object.
	     NEW.SEND(1,0,0)  && Parameter 1 = save copy in "Sent Mail" folder.
	     SESSION.LOGOFF   && Release the MAPI object.
	
	     *====End of OLE Messaging Program.
	
	REFERENCES
	==========
	
	For more details on OLE Messaging, please see the January Microsoft Developers
	Network (MSDN) CD-ROM compact disc. The Topic is located under the Win32 SDK,
	Win32 Messaging, and OLE Messaging Library topics.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q175052 HOWTO: Send a Message in VFP Using Active Messaging
	
	Additional query words: MAPI OLE
	
	======================================================================
	Keywords          : kbcode kbinterop kbActMsg kbAutomation kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
