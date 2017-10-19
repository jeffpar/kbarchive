---
layout: page
title: "Q235684: SMS: Systems Management Server Software Development Toolkit FAQ"
permalink: /kb/235/Q235684/
---

## Q235684: SMS: Systems Management Server Software Development Toolkit FAQ

	Article: Q235684
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 16-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The released version of the Systems Management Server Software Development Kit
	(SDK) for version 2.0 is now available for download as part of the platform SDK.
	This product was previously named "SMS Toolkit" in its Beta forms, and this
	release directly supercedes the existing Systems Management Server (SMS) 2.0
	Beta 3 Toolkit. This article addresses the most common questions about the
	Systems Management Server SDK.
	
	MORE INFORMATION
	================
	
	Question
	--------
	
	What's in the SMS 2.0 SDK?
	
	Answer
	------
	
	The SDK contains documentation and sample applications for developing SMS
	applications which integrate or utilize the SMS Admin UI, SMS Provider (server
	side apps) and client side applications. Most of the sample applications make
	use of WMI APIs, and the docs reference WMI and MMC SDK's.
	
	Question
	--------
	
	How do I download the SMS 2.0 SDK?
	
	Answer
	------
	
	The setup is located at:
	
	http://www.microsoft.com/msdownload/platformsdk/setuplauncher.htm
	
	Select the link to "Platform SDK Setup".
	
	Choose Custom install and for a minimal SMS SDK installation you should select
	the following components:
	
	  Documentation /  Management Services / Microsoft Management Console
	  Documentation /  Management Services / Systems Management Server
	  Documentation /  Management Services / Windows Management
	  Instrumentation
	  Documentation /  Networking/ Network Monitor
	  Build Environment / Systems Management Server Headers and Libs
	  Build Environment / WMI Headers and Libs
	  Tools / Systems Management Server Tools
	  Sample Code -> Management Samples / Systems Management Server samples
	  Sample Code -> Management Samples / WMI samples
	
	The entire SDK starting point platform is available at the following website:
	
	http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/portals/mainport.htm
	
	Question
	--------
	
	Q: How do I build the C++ samples?
	
	Answer
	------
	
	The C++ samples need to be pointed to the header and lib locations before they
	can successfully build.
	
	To set header file directory:
	
	1. In msdev choose Tools menu and then select Options and then select
	  Directories
	
	2. Select the "Directories" tab
	
	3. From the drop-down menu select show directories for and then choose Include
	  files
	
	4. Add a new path entry and set it to Root Location\Platform SDK\INCLUDE where
	  Root Location is the root directory of the platform SDK installation.
	
	To set lib directory:
	
	1. Create a directory called "Lib" in the directory Root Location\Platform
	  SDK\samples\SysMgmt\SMS\VC
	
	2. Copy Wbemuuid.lib from Root Location\Platform SDK\Lib to this new directory.
	
	Question
	--------
	
	When will the SMS 2.0 SDK be on the MSDN CDs?
	
	Answer
	------
	
	The entire SMS 2.0 SDK will be in the July 99 quarterly MSDN release. The April
	99 MSDN release did contain the SMS 2.0 SDK documentation, but it was missing
	the samples. Jan 99 MSDN and prior versions contained the SMS 1.2 SDK only.
	
	Question
	--------
	
	Is there a Network Monitor (Netmon) 2.0 SDK available?
	
	Answer
	------
	
	The Netmon 2.0 documents are in the Platform SDK, but it is missing the netmon
	samples and build environment. If you need the Netmon build environment for the
	SMS Beta 3 Toolkit it is shipping in the Back Office Resource Kit 4.5 ).
	
	
	Question
	--------
	
	How do I obtain the SMS 1.2 SDK now that the SDK platform has only the 2.0
	version?
	
	Answer
	------
	
	The 1.2 sample files are included in the new platform SDK, but the documentation
	is not. Currently the only method of obtaining the documentation is from an
	older MSDN release (Jan 99 or previous).
	
	Additional query words: prodsms smssdk sms sdk toolkit smstoolkit platform develop customize UI kbhowto
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
