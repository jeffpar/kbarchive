---
layout: page
title: "Q177501: Code Page Specified in Remote Environment Was Not Used"
permalink: kb/177/Q177501/
---

## Q177501: Code Page Specified in Remote Environment Was Not Used

	Article: Q177501
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application component was tested, the code page for English (United
	States) was used for character translation, but the Language Locale attribute
	specified in the Remote Environment (RE) Properties page was French (Standard).
	The default code pages were selected for both Language Locales.
	
	CAUSE
	=====
	
	The RE was created with the Language Locale attribute set to English. A
	component was assigned to this RE and tested. After this test, the Language
	Locale in the RE was changed to French (Standard) and the component was tested
	again. However, the new French code page was not used and the application did
	not work properly.
	
	Changes to locale and code page attributes for a Remote Environment will not take
	effect until all run-time activity is stopped.
	
	Specifically, locale and code page attributes of an RE can be changed using the
	COM Transaction Integrator (COMTI) Management Console on the Locale property
	page. When the user updates these attributes, the COMTI Management Console
	immediately saves the updated values in the Windows NT registry. However, these
	updated values are not loaded by the COMTI run-time elements if components
	assigned to the RE are being used.
	
	WORKAROUND
	==========
	
	To ensure that the COMTI run-time elements use modified locale and code page
	information, locate the My Computer item in the Microsoft Transaction Server
	folder and issue the Shut Down Server Processes command. This will stop the
	COMTI run-time elements and force a reload of the updated RE information from
	the Windows NT registry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0. A supported fix
	is now available for SNA Server 4.0, but has not been fully regression-tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next Service Pack that contains this fix. Contact Microsoft
	Product Support Services for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
