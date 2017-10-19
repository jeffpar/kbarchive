---
layout: page
title: "Q181410: XADM: Store Stops Responding with High CPU Usage for a Thread"
permalink: /kb/181/Q181410/
---

## Q181410: XADM: Store Stops Responding with High CPU Usage for a Thread

	Article: Q181410
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Information Store service may appear to stop
	responding with 90 to 100 percent CPU time. Any clients may also stop responding
	(for example, the cursor turns into the hourglass symbol). When this problem
	occurs, the information store may fail to stop running when a service shutdown
	is attempted.
	
	Viewing the individual threads of Store.exe using performance monitor will shows
	a single thread of the information store that appears to be running near 100
	percent CPU usage continuously.
	
	CAUSE
	=====
	
	The information store attempted to decode a corrupt message from it's compressed
	RTF form into an Exchange message body form. The current decode logic did not
	handle compressed RTF corruption of this form and entered into a tight loop.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To view this in the Windows NT Performance Monitor (Perfmon.exe), follow these
	steps:
	
	1. Start Perfmon.exe.
	
	2. From the Edit menu, click Add To Chart.
	
	3. In the Object dropdown list box, select Thread.
	
	4. In the Counter list box, select %Processor Time.
	
	5. In the Instance list box, select all values that contain "store."
	
	You can now use Perfmon.exe to view the thread running at high CPU usage.
	
	Additional query words: CPU THREAD SPINNING UNRESPONSIVE SHUTDOWN PROBLEM
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
