---
layout: page
title: "Q311809: Initial APPC Print Job May Have Incorrect Font Size"
permalink: kb/311/Q311809/
---

## Q311809: Initial APPC Print Job May Have Incorrect Font Size

	Article: Q311809
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The initial print job printed through an Advanced Program-to-Program
	Communications (APPC) (AS/400) print session may print using an incorrect font
	size each time the print session is restarted. Subsequent print jobs that use
	the same APPC print session use the correct font size.
	
	This only occurs if the APPC print session is configured as follows:
	
	1. Courier New selected as its specific font.
	
	2. Use Fixed Font Size is selected and a font size is specified.
	
	CAUSE
	=====
	
	The 5250 print provider fails to use the specific font size specified in an APPC
	print session for its initial print job because Courier New is the default font
	used by the host print service. Because the default font (Courier New) is
	specifically configured, the 5250 print provider doesn't check to see if a
	specific font size is configured before printing the initial print job.
	Subsequent print jobs do use the specified font size as the 5250 print provider
	does check to see if a specific font size is configured.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
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
	
	+-----------------------------------+
	| File name   | Date       | Time   | 
	+-----------------------------------+
	| Ppd5250.dll | 10/08/2001 | 7:43AM | 
	+-----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
