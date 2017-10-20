---
layout: page
title: "Q147695: MEMBER OF in FPNW Login Script Returns Incorrect Results"
permalink: /kb/147/Q147695/
---

## Q147695: MEMBER OF in FPNW Login Script Returns Incorrect Results

{% raw %}

	Article: Q147695
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the MEMBER OF statement in a login script for File and Print
	Services for NetWare (FPNW), incorrect results are returned. For example, if you
	use the following in your login script:
	
	  if member of "ADMINISTRATORS" then
	
	     write "Yes-member"
	
	  else
	
	     write "No - not a member"
	
	  end
	
	"No - not a member" appears, whether or not the user is a member of
	Administrators.
	
	CAUSE
	=====
	
	This problem occurs with any built-in groups, such as Administrators, Everyone,
	Account Operators, Backup Operators, Guests, Power Users, Print Operators,
	Replicator, Server Operators and Users.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt fpnw
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
