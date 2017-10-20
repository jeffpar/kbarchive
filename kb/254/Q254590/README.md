---
layout: page
title: "Q254590: Unattended Setup of NTOP Does Not Install SMTP Service"
permalink: /kb/254/Q254590/
---

## Q254590: Unattended Setup of NTOP Does Not Install SMTP Service

{% raw %}

	Article: Q254590
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Windows NT Option Pack (NTOP) for Windows NT Server
	version 4.0 using the Unattended Setup mode, the SMTP Service is not installed.
	This issue occurs even though the Unattend.txt file includes the IIS_SMTP = ON
	entry in the SMTP and NNTP section.
	
	CAUSE
	=====
	
	This issue occurs when Internet Information Server (IIS) 2.0 is installed during
	the installation of Windows NT 4.0. Applying IIS 3.0 (included with Windows NT
	Service Pack 3) does not resolve this problem.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time   Version      Size      File name   Platform
	  -------------------------------------------------------------
	  11/25/98   08:05p               33,535   Ims.inf       (x86)
	  12/02/98   11:29a 5.5.1877.24  515,856   Imsinsc.dll   (x86)
	  11/25/98   08:04p               36,868   Ins.inf       (x86)
	
	  12/03/98   09:59p               33,628   Ims.inf       (Alpha)
	  12/02/98   11:22a 5.5.1877.24  615,696   Imsinsc.dll   (Alpha)
	  12/03/98   10:00p               37,049   Ins.inf       (Alpha)
	
	
	
	WORKAROUND
	==========
	
	When you install Windows NT Server 4.0, do not install Internet Information
	Server. If you have done this already, run the Windows NT Option Pack Unattended
	Setup a second time to install the SMTP Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0
	.
	
	
	REFERENCES
	==========
	
	  Q197303 NNTP and SMTP in IIS Fail to Start
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
