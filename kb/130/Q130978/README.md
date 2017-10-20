---
layout: page
title: "Q130978: PC DirSync: IdleTime Will Not Work if External Is Idle Process"
permalink: /kb/130/Q130978/
---

## Q130978: PC DirSync: IdleTime Will Not Work if External Is Idle Process

{% raw %}

	Article: Q130978
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can not use the IdleTime parameter with Dispatch if you are running the Mail
	External program (EXTERNAL.EXE) as an idle process.
	
	MORE INFORMATION
	================
	
	When you run External as an idle process of Dispatch, Dispatch will
	automatically pass the IdleProcessMaxPeriod (-TU) parameter to External, which
	will display as the BreakRelative (-BR) command. Therefore, you cannot use the
	IdleTime (-N) parameter of Dispatch. If you do try to use the IdleTime
	parameter, you will get unpredictable results.
	
	For additional information, please see version 3.2 of Microsoft Mail for PC
	Networks "Administrator's Guide" page 296.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
