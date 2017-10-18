---
layout: page
title: "Q172046: XCLN: Patch for Outlook Deployment Kit on April Select CD"
permalink: kb/172/Q172046/
---

## Q172046: XCLN: Patch for Outlook Deployment Kit on April Select CD

	Article: Q172046
	Product(s): Microsoft Exchange
	Version(s): 98
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Outlook 98 client installations that are created with the Outlook 98
	Deployment Kit that is included with the April 1, 1998 Select CD-ROM do not
	respond correctly to registration as the default mail client. Mailto: URLs and
	the Microsoft Internet Explorer Mail button may not function properly. This is
	the result of an error in the Stdprf.inf file. The Odkupd.exe file automatically
	fixes this error.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Olodkupd.exe now
	  (http://download.microsoft.com/download/outlook98/odk/1/win98/en-us/Olodkupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following is the Readme.txt file for the Odkupd.exe file. This file
	automatically fixes the error in the Stdprf.inf file in the Outlook Deployment
	Kit found on the April Select CD-ROM. You can obtain this Readme.txt file by
	downloading Olodkupd.exe from the Microsoft Download Center and by extracting
	its contents.
	
	      --------------------------------------------------------
	             Microsoft Outlook 98 README for Odkupd.exe
	                              March 1998
	      --------------------------------------------------------
	              (c) Copyright Microsoft Corporation, 1998
	
	  ------------
	  INTRODUCTION
	  ------------
	
	  This utility is designed to correct an error in the Stdprf.inf file in
	  the Outlook Deployment Kit, found on the April Select CD-ROM. It should    not be used in any other version of the Outlook Deployment Kit.
	
	  The Olodkupd.exe file contains the following files:
	
	  Odkupd.exe   The patch that corrects the error in the Stdprf.inf file
	  Readme.txt   Information about the patch and instructions for manually
	               correcting the error
	
	  SYMPTOMS
	  --------
	  Outlook 98 client installations created with the Outlook 98 Deployment
	  Kit that shipped with the April 1, 1998 Select CD-ROM will fail to     correctly register as the default mail client. Mailto: URLs and Internet
	  Explorer's "Mail" button will not function properly.
	
	  This is a result of a single, missing quotation in two copies of the
	  Outlook 98 Deployment Kit file Stdprf.inf. If the Created Date = March
	  12, 1998 of either of the Stdprf.inf files on your computer, select one
	  of the methods below to correct the problem.
	
	  Method 1
	  --------
	
	  To correct this problem automatically, run Odkupd.exe. It replaces both
	  copies of the Stdprf.inf file.
	
	  Method 2
	  --------
	
	  To correct this problem manually, follow the steps below.
	
	  NOTE: You must do this before you use the Outlook Deployment Kit. If you
	  already deployed an Outlook 98 Client installation, you must rebuild it.
	
	  1. Locate both copies of Stdprf.inf. The default locations are:
	
	        \Program Files\ODK\olbin\ 
	
	        - and -
	
	        \Program Files\ODK\olbin\en\optional\ 
	
	  2. Open each file in a text editor, such as Notepad.
	
	  3. Locate the following line:
	
	       Q=""
	
	     Replace that line with:
	
	       Q="""
	
	  4. Save and close the file.
	
	Additional query words: 98 ODK
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : :98
	Issue type        : kbinfo
	
	=============================================================================
	
