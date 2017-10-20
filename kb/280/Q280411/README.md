---
layout: page
title: "Q280411: XADM: Sender Does Not Receive an NDR"
permalink: /kb/280/Q280411/
---

## Q280411: XADM: Sender Does Not Receive an NDR

{% raw %}

	Article: Q280411
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When one of the Exchange Server computers is down in a site that contains
	multiple servers, and a message cannot be delivered, a non-delivery report (NDR)
	may not be returned to the sender if the following conditions exist:
	
	- The Exchange Server site contains more than two Exchange Server computers.
	
	- The message is sent from one server to a recipient on another server.
	
	- The recipient server's message transfer agent (MTA) is down.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	This fix should have the following file attributes:
	
	  Date          Time    Version      Size        File name         Platform
	  -------------------------------------------------------------------------
	  Aug-12-2000   10:37   0.0.0.0000   2,953,216   Q280411engi.exe   Intel
	  Aug-12-2000   10:33   0.0.0.0000   4,509,696   Q280411enga.exe   Alpha
	
	After the hotfix is installed, the following files will have the listed
	attributes or later:
	
	  Date          Version       Size        File name      Platform
	  ----------------------------------------------------------------------
	  Aug-09-2000   N/A              41,254   Dbserver.sch   Intel and alpha
	  Aug-09-2000   N/A             159,634   Dcprods.cat    Intel and alpha
	  Jul-12-2000   5.5.2654.35      69,392   Ems_rid.dll    Intel
	  Jul-12-2000   5.5.2654.35     139,024   Ems_rid.dll    alpha
	  Jul-12-2000   5.5.2654.35   1,931,024   Emsmta.exe     Intel
	  Jul-12-2000   5.5.2654.35   3,557,648   Emsmta.exe     alpha
	  Jul-12-2000   5.5.2654.35     167,184   Mtacheck.exe   Intel
	  Jul-12-2000   5.5.2654.35     304,400   Mtacheck.exe   alpha
	  Jul-12-2000   5.5.2654.35     745,744   Mtamsg.dll     Intel
	  Jul-12-2000   5.5.2654.35     748,816   Mtamsg.dll     alpha
	  Jul-12-2000   5.5.2654.35      16,144   Mtaperf.dll    Intel
	  Jul-12-2000   5.5.2654.35      27,408   Mtaperf.dll    alpha
	  Aug-09-2000   N/A              50,789   P2.xv2         Intel and alpha
	  Aug-09-2000   N/A              14,002   P42.tpl        Intel and alpha
	  Aug-09-2000   N/A              40,706   P772.tpl       Intel and alpha
	  Jul-12-2000   5.5.2654.35     322,320   X400om.dll     Intel
	  Jul-12-2000   5.5.2654.35      94,192   X400om.dll     alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	If the Exchange Server MTA service stops on one server, Exchange Server versions
	4.0 and 5.0 return an NDR to the sender and delete the message from the MTA
	queue when the message exceeds the retry limit and the retry intervals. This
	behavior changes in Exchange Server 5.5; the MTA keeps trying to send the
	message until the recipient server's MTA service is restarted.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
