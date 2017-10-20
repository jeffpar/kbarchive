---
layout: page
title: "Q195823: SMS: Audit Stops If Certain Entries in Sms.ini Are Blank"
permalink: /kb/195/Q195823/
---

## Q195823: SMS: Audit Stops If Certain Entries in Sms.ini Are Blank

{% raw %}

	Article: Q195823
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running Audit, one of the following errors (depending on whether you are
	running Audit32 or Audit16) is logged and Audit is stopped:
	
	For Audit32
	-----------
	
	  An error has occurred while trying to read the Sms.ini file.
	
	For Audit16
	-----------
	
	  A file error occurred: File read error in SMS.INI file.
	
	CAUSE
	=====
	
	The client's Sms.ini file has a blank value for any one or more of the following
	entries:
	
	  NetCardID=
	  MachineName=
	  SystemRole=
	  SystemType=
	  SiteCode=
	  SMS Unique ID=
	  Domain=
	  LastLoggedUser=
	
	The values from the above entries are used to populate the IDMIF created by
	Audit.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time        Size    File name    Platform
	  ----------------------------------------------------
	  11/11/98   3:57pm      188,896  Audit32.exe (Intel)
	  11/11/98   3:49pm        5,392 Aud32str.dll (Intel)
	  11/11/98   3:56pm      626,960  Audit32.exe (Alpha)
	  11/11/98   3:50pm        5,392 Aud32str.dll (Alpha)
	  11/11/98   3:59pm      134,556  Audit16.exe (Intel)
	  11/11/98   3:47pm        5,440 Auditstr.dll (Intel)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The updated Audit program will only stop if the Systems Management Server Unique
	ID, MachineName, SiteCode, or Domain value is blank. With the hotfix, Audit also
	logs which entry contained a blank value.
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the Audit32.exe file in the
	  <SMS_root>\Primsite.srv\Audit\Package\<Platform>.bin directory
	  with the hotfixed version.
	
	2. Replace the Aud32str.dll file in the
	  <SMS_root>\Primsite.srv\Audit\Package\<Platform>.bin\00000409
	  directory with the hotfixed version.
	
	3. Replace the Audit16.exe file in the
	  <SMS_root>\Primsite.srv\Audit\Package\X86.bin directory with the
	  hotfixed version.
	
	4. Replace the Auditstr.dll file in the
	  <SMS_root>\Primsite.srv\Audit\Package\X86.bin\00000409 directory with
	  the hotfixed version.
	
	NOTE: You can perform these steps automatically by using Hotfix.exe with the
	provided Hotfix.ini file.
	
	Additional query words: prodsms terminate terminates terminated
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
