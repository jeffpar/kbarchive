---
layout: page
title: "Q249578: Pcmdump Detects Expiration Date Incorrectly in Instruction File"
permalink: /kb/249/Q249578/
---

## Q249578: Pcmdump Detects Expiration Date Incorrectly in Instruction File

	Article: Q249578
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are viewing an instruction (.ins) file, Pcmdump.exe detects a year 2000
	expiration date of 01/01/00 incorrectly as 01/01/100. The expiration date when
	you run the Pcmdump tool against the .ins file is displayed as:
	
	  Expiration Date : 01/01/100 16:11:00
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
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
	
	  Date       Size      File name     Platform
	  -------------------------------------------
	  02/02/00   104 KB    Pcmdump.exe   Intel
	  02/02/00   308 KB    Pcmdump.exe   Alpha
	
	
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To install this hotfix, replace the hotfixed Pcmdump.exe file in the current
	Pcmdump.exe folder structure.
	
	This is not a critical problem because it is a problem only with the Resource Kit
	Pcmdump.exe tool. The date is correctly stored in the instruction file and can
	be viewed via the job details when you are using the client's Package Command
	Manager (Pcmwin32) tool. It displays the year 2000 date correctly as 01/01/00.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
