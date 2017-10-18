---
layout: page
title: "Q37927: Mac DOS: Options Stored in MAIL.INI File"
permalink: kb/037/Q37927/
---

## Q37927: Mac DOS: Options Stored in MAIL.INI File

	Article: Q37927
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MAIL.INI file for Microsoft Mail (MS-DOS client) contains information
	designating the current network server, network zone, printer port, and default
	file types for file attachments used during a mail session on an MS- DOS client.
	You can change these settings by rerunning the Setup program or by modifying the
	MAIL.INI file with a text editor.
	
	MORE INFORMATION
	================
	
	The MAIL.INI file, located in the directory you specify during Setup, contains
	the following information:
	
	- A list of default file formats to be used for files attached to mail messages
	  (based on the three-character extension of the attached file)
	
	- The color setting for proper display on your MS-DOS workstation (created by
	  the Setup program) (default = 2)
	
	- The name of the zone containing your server (created by the Setup program)
	
	- The name of the server your MS-DOS workstation is connected to (created by
	  the Setup program)
	
	- Print width (default = 65 characters)
	
	- Print length (default = 54 lines)
	
	- Top margin (default = 0)
	
	- Left margin (default = 0)
	
	- Printer port (default = LPT2)
	
	The following is a sample MAIL.INI file:
	
	     .txt=Text file:TEXT:MSWD:text
	     .sty=MS Word style sheet:::binary
	     .wrd=MS Word document:TEXT:MSWD:binary
	     .doc=MS Word document:WDBN:MSWD:binary
	     .slk=SYLK spreadsheet:TEXT:XCEL:text
	     .wks=PC spreadsheet:TEXT:XCEL:binary
	     .wk1=PC spreadsheet:TEXT:XCEL:binary
	     .xls=Excel spreadsheet:XLS :XCEL:binary
	     .xlc=Excel chart:XLC :XCEL:binary
	     .xlm=Excel macro:XLM :XCEL:binary
	     .xlw=Excel workspace:XLW :XCEL:binary
	     .exe=DOS executable file:::binary
	     .bat=DOS Shell Script:TEXT:MSWD:text
	     .com=DOS executable file:::binary
	     .pm3=Pagemaker 3 publ.:ALB3:ALD3:binary
	     .tem=Pagemaker template:ALT3:ALD3:binary
	     .tpl=Pagemaker template:ALT3:ALD3:binary
	     .=Default binary file:::binary
	     .???=WordPerfect 4.2 doc.:WPPC:SSIW:binary
	     .dbf=dBase III data file:::binary
	     COLOR=0
	     ZONE=p4000
	     SERVER=godzilla
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS kbMailATN310DOS
	Version           : :3.0,3.1
	
	=============================================================================
	
