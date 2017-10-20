---
layout: page
title: "Q197303: NNTP and SMTP in IIS Fail to Start"
permalink: /kb/197/Q197303/
---

## Q197303: NNTP and SMTP in IIS Fail to Start

{% raw %}

	Article: Q197303
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NNTP and SMTP components in Internet Information Server (IIS) 4.0 fail to
	start if the installation path for IIS is anything other than
	%windir%\system32\inetsrv. The following error is logged in the event log:
	
	  Event ID: 7023 The "" service terminated with the following error: The system
	  can not find the file specified.
	
	CAUSE
	=====
	
	The installation path for NNTP and SMTP is hard-coded in IIS 4.0.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size      File name   Platform
	  --------------------------------------------------
	  11/25/98   08:05p    33,535   Ims.inf       (x86)
	  12/02/98   11:29a   515,856   Imsinsc.dll   (x86)
	  11/25/98   08:04p    36,868   Ins.inf       (x86)
	
	  12/03/98   09:59p    33,628   Ims.inf       (Alpha)
	  12/02/98   11:22a   615,696   Imsinsc.dll   (Alpha)
	  12/03/98   10:00p    37,049   Ins.inf       (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	MORE INFORMATION
	================
	
	IIS 2.0 allowed the system files path to be changed during the Setup program.
	This problem usually occurs when IIS 2.0 has been upgraded to IIS 4.0.
	
	This is a setup bug. Therefore you have to do the following to make the fix
	work:
	
	- Remove SMTP and NNTP services.
	- Create a installation point (example, directory) containing all installation
	  files.
	- Replace the installation files with the ones from the fix.
	- Install the SMTP and NNTP services again using the files from the
	  installation point.
	
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
