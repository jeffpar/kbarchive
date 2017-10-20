---
layout: page
title: "Q182827: XADM: Store Uses 100 Percent CPU When Sending Postscript Attachm"
permalink: /kb/182/Q182827/
---

## Q182827: XADM: Store Uses 100 Percent CPU When Sending Postscript Attachm

{% raw %}

	Article: Q182827
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send or receive postscript attachments via the Exchange Internet Mail
	Service, the Exchange information store may use 100 percent of the CPU time.
	When you view the Internet Mail Service queues in the Exchange Administrator
	program there is a message in the queue that appears to be stuck. The message
	may appear in either the Inbound Awaiting Conversion queue or the Outbound
	Awaiting Conversion queue.
	
	
	CAUSE
	=====
	
	The Exchange information store is failing to convert the attachment into a
	Quoted-Printable MIME message body part per RFC 1521.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.0 and
	5.5. A supported fix is now available, but has not been fully regression-tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: crash down XFOR IMS IMC peg pegs Utilization
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
