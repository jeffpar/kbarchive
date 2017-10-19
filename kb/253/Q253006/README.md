---
layout: page
title: "Q253006: Account Joiner Utility Hangs with Application Error Message on S"
permalink: /kb/253/Q253006/
---

## Q253006: Account Joiner Utility Hangs with Application Error Message on S

	Article: Q253006
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Account Joiner utility, it may stop responding
	(hang) with the following error message:
	
	  An application error has occurred and an application error log is being
	  generated.
	  accountJoiner.e.exe
	  Exception: access violation (0xc0000005), Address 0x1001b9b1
	
	CAUSE
	=====
	
	This error message can occur if you use brackets or parentheses in the
	management agent (MA) name. The Account Joiner utility considers brackets and
	parentheses to be illegal characters.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next version of Microsoft Metadirectory Services that contains this
	fix.
	
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
	
	  Date      Time    Version  Size     File name
	  -----------------------------------------------------
	  04/19/00  01:38p  1.0.0.1  174,592  Accountjoiner.exe
	  04/19/00  01:37p  1.0.0.8  539,648  Zcldap.dll
	
	
	
	WORKAROUND
	==========
	
	There is no workaround for this behavior. Microsoft does not recommend renaming
	the MA to avoid the problem characters.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in in Zoomit VIA 2.1 and Microsoft
	Metadirectory Service 2.1.
	
	
	Additional query words: Zoomit Via MA zscript genlogs mms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbMMSSearch
	Version           : :2.1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
