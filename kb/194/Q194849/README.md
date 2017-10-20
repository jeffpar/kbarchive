---
layout: page
title: "Q194849: PC MMTA: External Fails when Run as an Idle Process of Dispatch"
permalink: /kb/194/Q194849/
---

## Q194849: PC MMTA: External Fails when Run as an Idle Process of Dispatch

{% raw %}

	Article: Q194849
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Swedish or Italian versions of External 3.5 as an idle process
	of Dispatch with the '-tu02' command line option, External fails when started
	and logs the following entry in the session log:
	
	  external -BR 0:0:2 terminated with exit code 165,
	
	CAUSE
	=====
	
	When you run the Swedish or Italian version of External.exe as an idle process
	of Dispatch.exe, and no .ini files are present, External.exe is run using
	'external -br00:00:02'. This is invalid, so External.exe fails.
	
	The time separator is correct for all other instances within Dispatch but fails
	only when calling External.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  Dispatch.exe   3.5.28
	
	This hotfix has been posted to the following Internet location as Dirsy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	This problem was corrected in version 3.05.0028 of External.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Swedish and Italian versions
	of Microsoft Mail for PC Networks version 3.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
