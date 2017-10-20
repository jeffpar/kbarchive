---
layout: page
title: "Q178147: Unable to Save Typelib Changed in Component Builder"
permalink: /kb/178/Q178147/
---

## Q178147: Unable to Save Typelib Changed in Component Builder

{% raw %}

	Article: Q178147
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you open a Component Library in Component Builder (CB) and make a change to
	it, you are unable to save it. The Save menu item is disabled. Check the CB
	title bar to see if the component is either Registered or Read Only.
	
	This article describes a situation in which the reason that a typelib cannot be
	saved, is less obvious. A Visual Basic (VB) project is open that references a
	particular typelib. Subsequently, the programmer decides to make a change to the
	typelib and, in preparation, deletes it from its Microsoft Transaction Server
	(MTS) package. Therefore, it is no longer registered. Let's also say it is not
	marked read-only. The programmer then starts Component Builder (CB), opens the
	typelib and changes it. When CB is instructed to save the typelib, a message box
	appears with the following text:
	
	  Cannot overwrite ~\<filename>.TLB. Check that the file is not being
	  used by another application...
	
	You cannot save it because the VB project has a reference to it. There are two
	solutions. The first solution is to close the VB project. The second is to
	temporarily remove the component as a reference in the VB project. In either
	case, you can then save the typelib.
	
	MORE INFORMATION
	================
	
	To save a Component Library when the title bar says "Registered," first use MTS
	Explorer snap-in to shut down the server processes, and then delete the
	Component Library from its package.
	
	To save a Component Library when the title bar says "Read Only," first use
	Windows Explorer to remove this property from the typelib.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
