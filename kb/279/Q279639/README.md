---
layout: page
title: "Q279639: APPSEC.EXE Application Security Tool: Cannot Add NTVDM.EXE As Do"
permalink: /kb/279/Q279639/
---

## Q279639: APPSEC.EXE Application Security Tool: Cannot Add NTVDM.EXE As Do

{% raw %}

	Article: Q279639
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Server Resource Kit ISBN 1-57231-805-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows 2000 Server Resource Kit documentation for APPSEC.EXE states that to
	allow users to run 16-bit applications, you will need to add NTVDM.EXE to the
	authorized lists of applications. However, attempting to add NTVDM.EXE to the
	Authorized Application list, using the Add Authorized Application dialog box,
	will not add NTVDM.EXE to the list.
	
	CAUSE
	=====
	
	It is not possible to add NTVDM.EXE to the list using the Add Authorized
	Application dialog box.
	
	WORKAROUND
	==========
	
	To allow users to run a 16-bit applications, add the 16-bit application to
	AppSec. This will automatically add NTVDM.EXE as well as other files that are
	required to run a 16-bit application (e.g. WOW).
	
	To verify that NTVDM.EXE has been added, exit the AppSec utility and then
	re-launch it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following information in the Resource Kit documentation for APPSEC.EXE is
	incorrect.
	
	"The Application Security tool can only be used to restrict 32-bit applications.
	By default when AppSec is enabled users are restricted from running any 16-bit
	applications. To allow users to run all 16-bit applications, the administrator
	can add ntvdm.exe to the authorized list of applications."
	
	Note: This documentation is included in both the Windows 2000 Server Resource Kit
	and the Windows 2000 Professional Resource Kit. However, the AppSec tool is
	included in the Windows 2000 Server Resource Kit only, and is not included in
	the Windows 2000 Professional Resource Kit.
	
	Additional query words: reskit win2000 w2k RKBook tools Resource Kit
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
