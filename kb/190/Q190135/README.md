---
layout: page
title: "Q190135: SMS: Despooler Errors: Compilation Failed, Error Code = cb"
permalink: kb/190/Q190135/
---

## Q190135: SMS: Despooler Errors: Compilation Failed, Error Code = cb

	Article: Q190135
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When processing a status MIF, the despooler records the following entries in the
	Despool.log file:
	
	  ~Found ready instruction sni00000.sni
	  ~Executing instruction of type MICROSOFT|SMS|DOMAIN_COMMISSAR_WIREMOVE
	  ~Compilation failed~syntax error on line ..., token ...
	  ~Despooler failed to execute the instruction, error code = cb
	
	The status MIF is discarded and the Workstation Status is set to "Complete" for
	the target computer even if it was a "Failed" status MIF.
	
	For more information about the error code cb, see the following article in the
	Microsoft Knowledge Base:
	
	  Q169491 SMSINST: How Status MIFs Work with the SMS Installer
	
	CAUSE
	=====
	
	When a poorly formatted status MIF causes an unexpected situation, the status
	MIF is discarded. By default, the status is set to success.
	
	WORKAROUND
	==========
	
	To work around this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack.
	
	This fix should have the following time stamp:
	
	  07/10/98   02:36am               535,632 Base.dll (Intel)
	  07/10/98   02:36am               750,352 Base.dll (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Version 1.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	Additional query words: prodsms compilation failed
	
	======================================================================
	Keywords          : kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
