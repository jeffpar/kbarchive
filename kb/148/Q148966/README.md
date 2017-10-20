---
layout: page
title: "Q148966: The TN3270 Server Does Not Check for a Best LU to IP Match"
permalink: /kb/148/Q148966/
---

## Q148966: The TN3270 Server Does Not Check for a Best LU to IP Match

{% raw %}

	Article: Q148966
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The TN3270E server does not do any checking of which LU to IP matches are better
	than others.
	
	WORKAROUND
	==========
	
	One possible workaround is to reorder the pools in the configuration. Place the
	pool with the pool you want the user to use first last in the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	MORE INFORMATION
	================
	
	The following example shows where the TN3270 Server Service may allocate an
	user's session to a pool that the administrator did not expect:
	
	Pool Configuration
	------------------
	
	- Pool_A is configured to allow any workstation access. To do this, assign the
	  IP Address to 0.0.0.0 and the subnet mask to 255.255.255.255 in the Edit
	  Configuration for <pool_name> dialog box.
	
	- Pool_B is configured to only allow users on subnet 130.1.x.x. To do this,
	  assign the IP Address to 130.1.x.x and the subnet mask to 255.255.0.0 in the
	  Edit Configuration for <pool_name> dialog box.
	
	The Administrator's Preference
	------------------------------
	
	  The Administrator's preference is for users to get a session through Pool_B
	  first, and then Pool_A second.
	
	The Result
	----------
	
	If a workstation from the 130.1.x.x subnet tries to make a connection to the
	TN3270E Server, the TN3270E Server will not check for the best LU to IP match
	causing the workstation to potentially get an LU from Pool_A.
	
	Additional query words: 2.11 prodsna sp1 service pack 1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
