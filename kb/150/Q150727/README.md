---
layout: page
title: "Q150727: PCM Error: Unable to Connect. &lt;errcode&gt; -&#92;&#92;Server&#92;Share"
permalink: kb/150/Q150727/
---

## Q150727: PCM Error: Unable to Connect. &lt;errcode&gt; -&#92;&#92;Server&#92;Share

	Article: Q150727
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork sms3rdparty
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute a package from Package Command Manager (PCM) for Windows NT,
	the following error can occur:
	
	  Unable to connect. <errcode> -\\server\share.
	  92 -\\Distribution_Server_Name\SMS_PKGx.
	
	NOTE: This error will be generated for each distribution server specified in the
	client's instruction file. The \\Distribution_Server_Name is replaced with the
	actual distribution server name, and the x in \SMS_PKGx is replaced with the
	actual drive letter.
	
	CAUSE
	=====
	
	Atria's ClearCase version 2.1 for the Windows NT operating system is installed.
	
	MORE INFORMATION
	================
	
	The 92 in the above error is defined as "SERVER_NO_FREE_DRIVE" and will occur
	when no more free drives are available. However, in this particular scenario,
	you can map drives via File Manager.
	
	STATUS
	======
	
	Atria has confirmed this to be a problem with ClearCase version 2.1 and a fix is
	available. To obtain the fix, download patch 2.1.NT-17 from ftp.atria.com. If
	you experience problems locating or downloading the patch, please contact
	Atria's Technical Support at (617) 676-2450 for assistance.
	
	ClearCase is manufactured by Atria, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork sms3rdparty 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
