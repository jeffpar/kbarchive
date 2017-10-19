---
layout: page
title: "Q195303: XCLN: No Long Filename Support for Finnish Exchange 5.0 Client"
permalink: /kb/195/Q195303/
---

## Q195303: XCLN: No Long Filename Support for Finnish Exchange 5.0 Client

	Article: Q195303
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbExchange500preSP3fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Finnish Exchange Server 5.0 client and you try to attach a file
	with a long file name, the file can not be opened. This occurs when you try to
	attach files with file names of 12 or more characters and the file does not
	reside on the local computer. Most often, the symptom occurs when the file is on
	a UNIX or Novell server.
	
	CAUSE
	=====
	
	Win32 API suggests that a truncated short file name appear in a separate field
	when a long file name is being accessed from a server. The field for the
	truncated short file name was empty in this case; therefore, the returned file
	name was used as a short file name. This resulted in an inability to open the
	file, because the name was actually a long file name.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange Client 5.0
	
	  File Name     Version
	  -------------------------
	  Wmsui32.dll   5.0.1461.68
	
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Copy the file to your local hard disk, and then attach it to the message.
	
	- Use an 8.3 file name on the server.
	
	- Use the Exchange Server 4.0 client.
	
	- Use the Outlook client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows NT
	client version 5.0.
	
	MORE INFORMATION
	================
	
	To install the hotfix, copy the Wmsui32.dll file included in the hotfix to the
	following location:
	
	  Winnt\System32
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
