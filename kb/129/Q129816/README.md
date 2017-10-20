---
layout: page
title: "Q129816: Error 4266: WINS Connection Limit Reached"
permalink: /kb/129/Q129816/
---

## Q129816: Error 4266: WINS Connection Limit Reached

{% raw %}

	Article: Q129816
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Internet Name Service (WINS) servers with the option set to "replicate
	on address change" occasionally experience error 4266 in the error log, and show
	increased CPU utilization.
	
	CAUSE
	=====
	
	A WINS server sends a "push with propagate" message on an address change if the
	"replicate on address change" parameter is set (this can be set or cleared
	through WINS manager). If the push makes its way back to this WINS server after
	traversing two or more other WINS servers, it will be re- propagated by the
	original WINS server if that server pulls records from any of the WINS servers
	the message traversed.
	
	This is because any time WINS pulls records as a result of a "trigger with
	propagate", it propagates the new information that it has pulled to its push
	partners. So, under heavy registration/release traffic conditions, the
	propagation can go on until one of the WINS servers in the loop (receiving this
	propagated trigger) determines that there is nothing to pull. That is, its
	information is as current as the pushing WINS server's. When this happens the
	push propagation stops.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
