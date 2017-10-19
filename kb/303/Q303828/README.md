---
layout: page
title: "Q303828: BUG: Installing MSDN Does Not Enable MDSN Help Bars in VFP 7.0"
permalink: /kb/303/Q303828/
---

## Q303828: BUG: Installing MSDN Does Not Enable MDSN Help Bars in VFP 7.0

	Article: Q303828
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp kbGrpDSFox kbDSupport kbvfp700fix kbvfp700
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Visual FoxPro (VFP) version 7.0 and the Microsoft Developer
	Network (MSDN) library, two items are not enabled on the Help menu:
	
	- MSDN Search
	
	- Technical Support
	
	CAUSE
	=====
	
	The MSDN Search and Technical Support items are enabled only if MSDN is
	installed. However, the version of MSDN that is included with Visual FoxPro is
	the standard quarterly subscription release, which does not include a critical
	file (Vshelp.dll) that is required to enable functionality of the MSDN Search
	menu option.
	
	NOTE: MSDN is required for Help with ActiveX controls that ship with Visual
	FoxPro.
	
	RESOLUTION
	==========
	
	An update is available from the following MSDN Web site:
	
	  Visual FoxPro product updates
	  http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	NOTE: This issue only applies to the development version of Visual FoxPro and
	does not affect the Visual FoxPro run-time libraries. If you have previously
	installed Visual FoxPro 6.0 or Microsoft Visual Studio 6.0 along with the MSDN
	Help that shipped with those products, you do not have to install an update.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install VFP 7.0.
	
	2. Install the MSDN library that ships with VFP 7.0.
	
	3. View the Help menu. Note that two items are still disabled.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp kbGrpDSFox kbDSupport kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
