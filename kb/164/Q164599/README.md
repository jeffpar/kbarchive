---
layout: page
title: "Q164599: XCLN: Opening an Attachment on Rich Text Field Fails"
permalink: /kb/164/Q164599/
---

## Q164599: XCLN: Opening an Attachment on Rich Text Field Fails

{% raw %}

	Article: Q164599
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0; Win95:5.0; :8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Exchange Client for Windows 95, version 5.0 
	- Microsoft Outlook 97, version 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you add a RichEntry field to a form in a simple Exchange Form Designer,
	compile the form, and install it, you can attach an Office 97 .doc or .xls file
	to the form.
	
	When the recipient tries to open the attached file, the following error message
	may appear:
	
	  The application associated with this attachment could not be started. Verify
	  that the application is installed on your system with a correct directory
	  path.
	  c:\path\file.doc
	
	When you press F2, you may get a Microsoft Exchange Client - 0 - (80000008), even
	though the Microsoft Office 97 application is installed and works correctly.
	
	The problem occurs with Office 97 applications but not with Office 95
	applications.
	
	CAUSE
	=====
	
	The association for the file extension of the icon you have attached has been
	established using a path to the application that contains "space" or special
	characters.
	
	You can verify this using Windows Explorer. Go to View / Options / File Types.
	Click the file type you want and click Edit. Under the action, click Open. You
	will find that the path to the application has a space or a special character.
	
	Another way to test the association is to send the file in a message. If you
	create a standard message, not a form, and attach the same file to it, the
	recipient can open the file without any problem.
	
	The problem is that Office 97 does not install into an 8.3 compatible directory.
	By default, Word is installed in C:\Program Files\Microsoft
	Office\Office\winword.exe. Office 95 installs into a directory path that is 8.3
	compatible.
	
	WORKAROUND
	==========
	
	To work around this problem, either change the path or reinstall the Office 97
	application:
	
	To change the path:
	-------------------
	
	If possible, you can change the path to your application in the Open action on
	the Association tab for your icon.
	
	1. In Windows Explorer, on the View menu, click Options. On the File Types tab,
	  select Microsoft Word Document, and click Edit.
	
	2. Change the Open command, and substitute the path with an 8.3 compatible
	  path:
	
	     C:\progra~1\micros~1\office\winword.exe
	
	This requires that all of the client computers be changed.
	
	To reinstall the Office 97 application:
	---------------------------------------
	
	Reinstall the application to a new directory that does not contain special
	characters or a space. If you install Office 97 in the directory
	C:\office\winword.exe, everything works fine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0
	and 5.0. Microsoft is researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook803 kbExchange500NT
	Version           : WINDOWS:5.0; Win95:5.0; :8.03
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
