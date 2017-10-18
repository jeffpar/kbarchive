---
layout: page
title: "Q220923: XCLN: ODKLang Tool Fails During Package Creation"
permalink: kb/220/Q220923/
---

## Q220923: XCLN: ODKLang Tool Fails During Package Creation

	Article: Q220923
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When creating Outlook 98 foreign language deployment packages using the English
	Outlook Deployment Kit, the package creation may fail with the following error
	message:
	
	  The Outlook 98 Deployment Wizard was unable to generate a customized version
	  of Outlook. Either an error has occurred, or the user pressed Cancel
	
	CAUSE
	=====
	
	When the Odklang.exe copies files from the CD, it is preserving the read-only
	attribute of most of the files. When the ODK wizard tries to build a custom
	package, it has problems with the read-only state of some of the files.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+---------------------------------------------------+
	| File Name   | Version    | Date   | Size          | 
	+---------------------------------------------------+
	| ODKLang.exe | 8.50.5620  | 9/3/98 | 66.560 bytes  | 
	+---------------------------------------------------+
	| Scrrun.dll  | 4.0.0.2926 | 9/3/98 | 402,481 bytes | 
	+---------------------------------------------------+
	
	After you obtain the fix, perform the following steps:
	
	1. Copy ODKLang.exe to a computer that already has an ODK installation on it.
	
	2. Copy Scrrun.dll to your system directory.
	
	3. At a command prompt type, "regsvr32.exe scrrun.dll" (without the quotation
	  marks).
	
	4. Run ODKLang.exe.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
