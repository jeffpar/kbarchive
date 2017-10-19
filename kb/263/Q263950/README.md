---
layout: page
title: "Q263950: Slovenian Volume Control Causes Invalid Page Fault"
permalink: /kb/263/Q263950/
---

## Q263950: Slovenian Volume Control Causes Invalid Page Fault

	Article: Q263950
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool osr2 win95kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NOTE: The information in this article applies to the Slovenian-language version
	of Microsoft Windows 95 OEM Service Release 2 (OSR2).
	
	When you attempt to close the Properties dialog box that is available by clicking
	Properties on the Options menu in the Volume Control tool, you may receive the
	following error message:
	
	  SNDVOL32
	  Ta program je izvedel neveljavno operacijo, zato bo prekinjen.
	  Ce se tezave ponovijo, se obrnite na prodajalca tega programa.
	
	If you click Details, you receive the following error message:
	
	  SNDVOL32 je vzrok za napako zaradi neveljavne strani v\nmodulu SNDVOL32.EXE
	  pri 0137:00403c07.
	
	The English translation of this error message is:
	
	  SNDVOL32
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message:
	
	  SNDVOL32 caused an invalid page fault in module SNDVOL32.EXE at
	  0137:00403c07.
	
	CAUSE
	=====
	
	The Sndvol32.exe file that is included with the Slovenian localization of
	Windows 95 OSR2 is internally corrupted.
	
	
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
	
	The Slovenian-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time   Version      Size   File name     Platform
	  -------------------------------------------------------------------
	  09/10/1998 04:18p 4.10.0.1998  69,632 Sndvol32.exe  Windows 95 OSR2
	
	
	
	Note that the Sndvol32.exe file that is included with the retail version of
	Windows 95 (build 4.0.950) does not have this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in all Slovenian versions of
	Windows 95.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool osr2 win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
