---
layout: page
title: "Q143195: Error Msg: &quot;Can Not Install File...&quot; During IIS Setup"
permalink: kb/143/Q143195/
---

## Q143195: Error Msg: &quot;Can Not Install File...&quot; During IIS Setup

	Article: Q143195
	Product(s): Internet Information Server
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As part of Internet Information Server (IIS) Setup you can install ODBC drivers.
	When you select ODBC drives to be installed, the following message appears:
	
	  Can not install file c:\winnt35\system32\odbc32.dll. It might be in use:
	  Try closing all applications and choosing retry.
	
	  Choose Ignore if you want to skip this file.
	
	  [Abort] [Retry] [Ignore]
	
	CAUSE
	=====
	
	This problem occurs when applications that use ODBC drivers are running.
	However, it is also happens when services, such as SQL Executive, are running.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Close all the applications except the IIS Setup program.
	
	2. Open Services in Control Panel.
	
	3. Highlight SQL Executive and click on Stop button.
	
	4. Switch back to IIS Setup (Error dialog box) and click on Retry.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.00
	
	=============================================================================
	
