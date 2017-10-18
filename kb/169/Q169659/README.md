---
layout: page
title: "Q169659: XFOR: Err Msg: AppleTalk Mail Connector Service Not Created."
permalink: kb/169/Q169659/
---

## Q169659: XFOR: Err Msg: AppleTalk Mail Connector Service Not Created.

	Article: Q169659
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade from Windows NT Server 4.0 to Windows NT Service Pack 3,
	Microsoft Exchange Server is unable to create an AppleTalk Mail Connector
	Service. When you attempt to create the AppleTalk Mail Connector Service, you
	will receive the following error message:
	
	  The MS Mail Connector (AppleTalk) MTA service was not created because
	  the counters for the Performance Monitor could not be installed.
	
	At this point, creation of the service fails.
	
	CAUSE
	=====
	
	The Windows NT utility Lodctr.exe fails to look for Macgperf.h in the same
	directory as the Macgperf.ini file. If this .h file is not found, AppleTalk MTA
	service installation fails.
	
	WORKAROUND
	==========
	
	Copy the Macgperf.h file into a directory that is included in the system path or
	into the same directory where Exchange Admin.exe is located (\Exchsrvr\Bin).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server
	Service Pack 3. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	MORE INFORMATION
	================
	
	By default, the Macgperf.h and Macgperf.ini files reside in the
	\Exchsrvr\Connect\Msmcon\Bin directory. In previous versions of Windows NT,
	Lodctr.exe searches for required files in the same directory as the .ini file,
	the current directory, and the system path.
	
	The Lodctr.exe included with Windows NT 4.0 SP3 only searches the current
	directory and the system path for required files.
	
	Additional query words: apple connector msmail migration mac perfmon Counter AppleTalk MTA
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
