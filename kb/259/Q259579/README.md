---
layout: page
title: "Q259579: Cannot Search Words with Nonbreaking Hyphens"
permalink: kb/259/Q259579/
---

## Q259579: Cannot Search Words with Nonbreaking Hyphens

	Article: Q259579
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Site Server version 3.0 
	- Indexing Service 
	- Microsoft Word 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you search for Microsoft Word documents that contain words with nonbreaking
	hyphens (CTRL+HYPHEN), you may get unexpected results. For example, if a
	document contains the word "Schol-lers" (without the quotation marks) with a
	nonbreaking hyphen between "Schol " (without the quotation marks)and "lers"
	(without the quotation marks), the following query does not return the
	document:
	
	  @Contents Schollers
	
	CAUSE
	=====
	
	The Microsoft Office filter cannot handle the non-breaking hyphen. Therefore, in
	this example, "Schol " (without the quotation marks)and "lers" (without the
	quotation marks) are stored as separate strings in the catalog.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows 2000 or Site Server
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Version      Size    File name     Platform
	  -------------------------------------------
	  2000.5.16.0  188,416 Offfilt.dll   x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbSiteServSearch kbIdxServSearch kbAudDeveloper kbWord2000Search kbWord2000 kbZNotKeyword2 kbIdxServ100 kbIdxServ200 kbSiteServ300
	Version           : :2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
