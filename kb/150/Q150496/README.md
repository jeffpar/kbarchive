---
layout: page
title: "Q150496: CLI_DOS /R Does Not Remove Extra Space in LOAD Line of WIN.ini"
permalink: /kb/150/Q150496/
---

## Q150496: CLI_DOS /R Does Not Remove Extra Space in LOAD Line of WIN.ini

{% raw %}

	Article: Q150496
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Cli_Dos /R, the Smsrun16.exe file is removed from the Win.ini.
	However, if this file is in between two other files the extra space is not
	removed and an error message appears when you bring up Windows.
	
	In other words, the following line:
	
	  load=fileA<space>smsrun16.exe<space>fileB
	
	becomes this line when you run Cli_Dos/R:
	
	  load=fileA<space><space>fileB
	
	WORKAROUND
	==========
	
	To work around this problem, you must manually delete the extra space.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A fix to this problem is in development, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information on the
	availability of this fix.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
