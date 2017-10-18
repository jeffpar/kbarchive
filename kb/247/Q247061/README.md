---
layout: page
title: "Q247061: XWEB: Computer Running IIS Prompts to Insert Disk in Drive A"
permalink: kb/247/Q247061/
---

## Q247061: XWEB: Computer Running IIS Prompts to Insert Disk in Drive A

	Article: Q247061
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Microsoft Internet Information Service (IIS), a dialog box may be
	displayed on the computer running IIS that prompts you to insert a disk in drive
	A. The computer running IIS stops responding until you click Ignore.
	
	CAUSE
	=====
	
	Microsoft Outlook Web Access (OWA) only parses the directory name from a full
	path string by using a backward slash (\). If a user attaches a file that is
	wrong, for example, A:/Test.txt, OWA still uses "A:/Test.txt" as the file name
	(without the path). The global ErrorMode variable is generally set to
	"SEM_FAILCRITICALERRORS" in the Inetinfo.exe file, so any further processing of
	the file stops immediately and an error message is generated. However, if the
	ErrorMode variable is changed, some processes, such as CreateFile, do not stop
	responding, but they generate a prompt to insert a disk in drive A. Some
	dynamic-link libraries (DLLs), such as the Mapi32.dll file, actually temporarily
	change the ErrorMode variable. This problem can occur in a high-stress
	environment.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Outlook Web Access
	
	+--------------------------+
	| File name  | Version     | 
	+--------------------------+
	| Attach.inc | 5.5.2651.59 | 
	+--------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The code in the Attach.inc file is changed so that it parses the path by using
	either a backward slash (\), a colon (:), or a forward slash (/), so that such
	invalid characters are not parsed into file names.
	
	Additional query words: server
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
