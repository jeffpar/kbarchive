---
layout: page
title: "Q194602: PC MMTA: Incorrect Error from Windows NT MMTA Dispatch"
permalink: /kb/194/Q194602/
---

## Q194602: PC MMTA: Incorrect Error from Windows NT MMTA Dispatch

	Article: Q194602
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Dispatch.exe, you see the errors and messages described below. The
	problem only occurs using a version of the External program earlier than 3.5.26
	under the following circumstances:
	
	- Dispatch is run as a service
	
	- No external postoffices are defined
	
	- Server.glb does not exist (there were NEVER any external postoffices defined
	  for this postoffice)
	
	You will see the following errors in the Dispatch.log file:
	
	  ANZ 11/14/95 12:47 Permanent drives: H
	  ANZ 11/14/95 12:47 Dynamic drives in use
	  ANZ 11/14/95 12:47 Dynamic connections could not be established.
	  ANZ 11/14/95 12:47 Checking the process table on MICROSOFT\APACRSC
	
	On the monitor windows, you also get the following message:
	
	  [13:13] Started: 11/14/95 13:13
	  [13:13] Dispatch time zone is: PST8PDT
	  [13:13] Home postoffice is: h
	  [13:13] Permanent drives: H
	  [13:13] Dynamic drives in use
	  [13:13] Dynamic connections could not be established.
	  [13:13] Do you want to exit the dispatcher?
	  [13:13] Press Y to exit, N to continue
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
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
	  Dispatch.exe   3.5.26
	
	This hotfix has been posted to the following Internet location as Dirsy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks
	versions 3.2 and 3.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : :3.2,3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
