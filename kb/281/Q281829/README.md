---
layout: page
title: "Q281829: How to Obtain and Install Systems Management Server 2.0 SP3"
permalink: kb/281/Q281829/
---

## Q281829: How to Obtain and Install Systems Management Server 2.0 SP3

	Article: Q281829
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbConfig kbMMC kbServer kbsms200 kbsmsAdmin kbUpgrade
	Last Modified: 01-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to upgrade Systems Management Server (SMS) 2.0 with
	Service Pack 3 (SP3).
	
	MORE INFORMATION
	================
	
	When you upgrade SMS 2.0 with SP3, the steps to upgrade may vary depending on
	the status of your current SMS 2.0 installation. Please read these instructions
	completely before you download SP3 for SMS 2.0.
	
	NOTE: SMS 2.0 SP3 and all future SMS service packs require that SMS 2.0 Service
	Pack 2 (SP2) be installed before you upgrade. It is recommended that you install
	the SMS 2.0 SP2 Full Installation CD. Information about how to obtain this CD is
	available later in this article.
	
	SMS 2.0 SP3 supports the following installation methods:
	
	- A new secondary site installation that is created from the SP3 CD source.
	
	- The SMS Administrator console installation that is installed using the SP3 CD
	  source.
	
	- A primary site upgrade from an existing SMS 2.0 SP2 site only.
	
	- A secondary site upgrade from an existing SMS 2.0 SP2 secondary site only.
	
	- An SMS Administrator console upgrade from an existing SMS 2.0 SP2 console
	  only.
	
	- Removing an SMS 2.0 SP3 site.
	
	- Modifying or resetting an SMS 2.0 SP3 site.
	
	SMS 2.0 SP3 does not support the following methods:
	
	- A primary site installation that does not have an existing SMS 2.0 SP2 site.
	  Note that SP3 can only upgrade a primary site.
	
	- An installation which uses an SP3 installation image to add optional
	  components to an SP2 site.
	
	SMS 2.0 SP3 requires SP2 for installation. If you need to upgrade an SMS 2.0
	primary site, secondary site, or Administrator console that has not already been
	upgraded to SP2, you must first upgrade it to SP2, and then upgrade it to SP3.
	
	For additional information about determining whether the SMS-based server has SP2
	installed, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q266130 SMS: Component Versions in Microsoft Systems Management Server 2.0
	
	You can obtain SMS 2.0 SP2 by using any of the following methods:
	
	- Members of volume programs such as Open or Select can order the SP2 Full
	  Installation CD by calling 1-800-248-0655.
	
	- Retail customers can order the SP2 Full Installation CD as replacements for
	  existing SP1 or no service pack (noSP) media by calling Microsoft Sales at
	  1-800-426-9400.
	
	- The SP2 Full Installation CD is shipped with all new SMS 2.0 Server Licenses.
	
	- The SP2 Full Installation CD is located in the August 2000 issue of Microsoft
	  Select.
	
	- The SP2 Full Installation CD is included with all SMS products that are
	  shipped after July 2000.
	
	- The SP2 Upgrade image can be downloaded from the following Microsoft Web
	  site:
	
	  http://www.microsoft.com/smsmgmt/downloads/sms20sp2.asp
	
	NOTE: The SP2 Upgrade CD can be also be ordered from this Web site.
	- The SP2 Upgrade CD is located in the August 2000 issue of TechNet.
	
	If your SMS 2.0 installation already has SP 2 installed, you can download SP3
	from the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/sms20sp3.asp
	
	NOTE: SP3 does not use the CD Patch tool that is used in the previous SMS SP1 and
	SP2 downloads.
	
	Installing SP3
	--------------
	
	To install SMS 2.0 SP3, follow these steps:
	
	1. Download the language version of SP3 that you need to a local computer.
	
	2. Copy the downloaded SP3 .exe file to a folder on the SMS-based site server
	  that you want to upgrade.
	
	3. Run the .exe file (it is a self-extracting WinZip .exe file).
	
	4. Run Setup.exe from the SP3 image that you extracted.
	
	For more information about SMS 2.0 SP3, review the release notes that are
	included in the Installation Readme file that is located at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/sp3installation.asp
	  (http://www.microsoft.com/smsmgmt/downloads/sp3installation.asp)
	
	You can also review the the Operation Readme files that are available at the
	following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/sp3operation.asp
	  (http://www.microsoft.com/smsmgmt/downloads/sp3operation.asp)
	
	This information is also included in the new SMS 2.0 SP3 image.
	
	For additional information about deploying service packs with SMS 2.0, please see
	the Deploying Service Packs technical paper that is located at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/deployment/servicepacks.asp
	  (http://www.microsoft.com/smsmgmt/deployment/servicepacks.asp)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbClient kbConfig kbMMC kbServer kbsms200 kbsmsAdmin kbUpgrade 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
