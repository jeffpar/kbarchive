---
layout: page
title: "Q311457: SMS: How to Obtain and Install SMS 2.0 SP4"
permalink: /kb/311/Q311457/
---

## Q311457: SMS: How to Obtain and Install SMS 2.0 SP4

	Article: Q311457
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to upgrade to Systems Management Server (SMS) 2.0
	Service Pack 4 (SP4).
	
	MORE INFORMATION
	================
	
	When you upgrade SMS 2.0 with SP4, the steps to upgrade may vary depending on
	the status of your current SMS 2.0 installation. Please read these instructions
	completely before you download SP4 for SMS 2.0.
	
	NOTE: SMS 2.0 SP4 and all future SMS service packs require that SMS 2.0 Service
	Pack 2 (SP2) be installed before you upgrade. Microsoft recommends that you
	install the SMS 2.0 SP2 Full Installation compact disc (CD). Information about
	how to obtain this CD is available later in this article.
	
	SMS 2.0 SP4 supports the following installation methods:
	
	- You perform a new secondary site installation by using the SMS SP4 CD source.
	
	- You perform an SMS Administrator console installation by using the SP4 CD
	  source.
	
	- You perform a primary site upgrade from an existing SMS 2.0 SP2 or Service
	  Pack 3 (SP3) site.
	
	- You perform a secondary site upgrade from an existing SMS 2.0 SP2 or SP3
	  secondary site.
	
	- You perform an SMS Administrator console upgrade from an existing SMS 2.0 SP2
	  or SP3 console.
	
	- You remove an SMS 2.0 SP4 site.
	
	- You modify or reset an SMS 2.0 SP4 site.
	
	SMS 2.0 SP4 does not support the following methods:
	
	- You try to upgrade a primary site installation that does not have an existing
	  SMS 2.0 SP2 or SP3 site. Note that SP4 can only upgrade a primary site.
	
	- You try to upgrade an installation that uses an SP4 installation image to add
	  optional components to an SP2 or SP3 site.
	
	SMS 2.0 SP4 requires either SP2 or SP3 for installation. If you are upgrading an
	SMS 2.0 primary site, secondary site, or Administrator console that has not
	already been upgraded to SP2, you must first upgrade the site or console to SP2,
	and then upgrade it to SP4.
	
	For additional information about how to determine if the SMS-based server has SP2
	installed, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q266130 SMS: Component Versions in Microsoft Systems Management Server 2.0
	
	You can obtain SMS 2.0 SP2 by using any of the following methods:
	
	- If you are a member of a volume program such as Open or Select, you can order
	  the SP2 Full Installation CD by calling 1-800-248-0655.
	
	- If you are a retail customer, you can order the SP2 Full Installation CD as
	  replacements for existing Service Pack 1 (SP1) or no service pack (noSP)
	  media by calling Microsoft Sales at 1-800-426-9400.
	
	- The SP2 Full Installation CD is included with all new SMS 2.0 Server
	  Licenses.
	
	- The SP2 Full Installation CD is located in the August 2000 issue of Microsoft
	  Select.
	
	- The SP2 Full Installation CD is included with all SMS products that are
	  shipped after July 2000.
	
	- Visit the following Microsoft Web site to download the SP2 Upgrade image:
	
	  http://www.microsoft.com/smserver/downloads/20/servicepacks/sms20sp2/default.asp
	
	  NOTE: The SP2 Upgrade CD can be also be ordered from this Web site.
	
	- The SP2 Upgrade CD is located in the August 2000 issue of TechNet.
	
	If your SMS 2.0 installation already has SP2 or SP3 installed, visit the
	following Microsoft Web site to download SP4:
	
	  http://www.microsoft.com/smserver/downloads/20/servicepacks/sms20sp4/default.asp
	
	SP4 (like SP3) does not use the CD Patch tool that is used in the SP1 and SP2
	downloads.
	
	NOTE: Several fixes (QFEs) have been issued for SP3 that are not included in SP4.
	If you have installed any of these SP3 fixes and apply SMS 2.0 SP4, your
	installation will revert back to its original functionality and you will need to
	apply an update to your installation of SP4 (when the update becomes available).
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q313839 Snapshot of QFEs Not Yet Available for SP4 Sites
	
	How to Install SMS 2.0 SP4
	--------------------------
	
	To install SMS 2.0 SP4:
	
	1. Download the language version of SP4 that you require to a local computer.
	
	2. Copy the downloaded SP4 .exe file to a folder on the SMS-based site server
	  that you want to upgrade.
	
	3. Run the .exe file (it is a self-extracting WinZip .exe file).
	
	4. Run Setup.exe from the SP4 image that you extracted.
	
	For more information about SMS 2.0 SP4, see the Installation (Readme.htm) and the
	Operations (Readme_Operations.htm) release notes that are included in the root
	of the SMS 2.0 SP4 image.
	
	For additional information about deploying service packs with SMS 2.0, see the
	"Deploying Service Packs" technical paper that is located at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/smserver/techinfo/deployment/20/deploysms/servicepacks.asp
	  (http://www.microsoft.com/smserver/techinfo/deployment/20/deploysms/servicepacks.asp)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
