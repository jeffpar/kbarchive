---
layout: page
title: "Q297870: SMS: Status Message Flood from Child or Secondary Servers"
permalink: /kb/297/Q297870/
---

## Q297870: SMS: Status Message Flood from Child or Secondary Servers

{% raw %}

	Article: Q297870
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbMMC kbServer kbsms200 kbsms200bug kbSiteComp kbStatSum kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) version 2.0 child or secondary sites may cause a
	"storm" of status messages to be sent to the primary site. Specifically, Site
	Control Manager may repeatedly create 10 status messages each second. The
	following information is an example of one iteration of the problem:
	
	  
	
	  ------
	  Processing delta site control file 
	  "C:\SMS\inboxes\sitectrl.box\incoming\8B4NFYM5.CT1"...
	  the delta site control file 
	  "C:\SMS\inboxes\sitectrl.box\incoming\8B4NFYM5.CT1" contains a record 
	  submitted by server component SMS_SITE_CONTROL_MANAGER running as user 
	  SMSService on computer CAIXATEST on Fri Apr 20 21:21:42 GMT.
	
	  TATMSG: ID=2808 <Rest of text deleted for readability>
	  WARNING: The "Site Definition" item in a record contained in delta site 
	  control file "C:\SMS\inboxes\sitectrl.box\incoming\8B4NFYM5.CT1" specifies
	  an invalid public key for decrypting the SMS service account and password.
	  This record and the remaining records in the file are unusable.
	
	  TATMSG: ID=2847 <Rest of text deleted for readability>
	  Deleted file "C:\SMS\inboxes\sitectrl.box\incoming\8B4NFYM5.CT1".
	  WARNING: Aborted processing of delta site control file 
	  "C:\SMS\inboxes\sitectrl.box\incoming\8B4NFYM5.CT1".  
	  TATMSG: ID=2800 <Rest of text deleted for readability>
	  TATMSG: ID=508 <Rest of text deleted for readability>
	  TATMSG: ID=2804 <Rest of text deleted for readability>
	  ------
	
	The preceding iteration takes less than a second to complete. Typically two
	iterations each second occur, which equals 10(5*2) status messages a second.
	10*60*60 equals 360,000 status messages an hour.
	
	CAUSE
	=====
	
	This problem can occur if both of the following conditions exist:
	
	- The time zone has been changed.
	
	- The system Microsoft Windows NT Cryptography key has been reset.
	
	NOTE: As of June 28, 2001, Microsoft NetMeeting with Remote Desktop sharing
	enabled is known to reset the Windows NT Cryptography key. However, other
	programs may also reset the key and satisfy the second condition for this
	problem to occur.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	Additional query words: prodsms sitectrl
	
	======================================================================
	Keywords          : kbenv kbtool kbMMC kbServer kbsms200 kbsms200bug kbSiteComp kbStatSum kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
