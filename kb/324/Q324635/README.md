---
layout: page
title: "Q324635: COMTI May Log Events 103, 300, and 301 When Under Load"
permalink: /kb/324/Q324635/
---

## Q324635: COMTI May Log Events 103, 300, and 301 When Under Load

{% raw %}

	Article: Q324635
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COMTI components that use an LU 6.2-type Remote Environment may fail under load
	and log events 103, 300, and 301 in the application event log.
	
	Details of Event ID 103
	
	  Event ID: 103
	  Event Source: COMTI
	  Description:
	  (103) An error occurred during object creation and couldn't be reported to the
	  client:
	
	  Exception description:
	  (1435) The SNA dynamic link libraries WAPPC32.DLL and WINCSV32.DLL were not
	  found on the system. You must install Host Integration Server 2000 or its
	  client software before you try to use the COM Transaction Integrator LU 6.2
	  transport.
	
	Details of Event ID 300
	
	  Event ID: 300
	  Event Source: COMTI
	  Description:
	  (300) COM Transaction Integrator's state machine dispenser was unable to
	  create a new state machine object
	
	  Progress Code: 6
	  HRESULT: 0x80040111
	
	Details of Event ID 301
	
	  Event ID: 301
	  Event Source: COMTI
	  Description:
	  (301) COM Transaction Integrator's state machine dispenser was unable to
	  allocate a state machine object
	
	  Progress Code: 2
	  HRESULT: 0x80040111
	
	CAUSE
	=====
	
	Under load, multiple COMTI client requests may be received at or near the same
	time. If this occurs when COMTI tries to load the APPC transport DLLs
	(wappc32.dll and wincsv32.dll), a timing issue may occur, which causes COMTI to
	return an exception to the client and to log the events that are listed in the
	"Symptoms" section.
	
	RESOLUTION
	==========
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Host Integration Server 2000
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version             Size   File name
	  --------------------------------------------------------------
	  20-Jun-2002  08:36  5.0.0.865         135,440  Convert.dll
	  20-Jun-2002  08:36  5.0.0.865          74,000  Convertprim.dll
	  20-Jun-2002  08:36  5.0.0.865          33,040  Dpl1.dll
	  20-Jun-2002  08:36  5.0.0.865          78,096  Readlib.dll
	  20-Jun-2002  08:36  5.0.0.865          78,096  Tranlu62.dll
	  20-Jun-2002  08:36  5.0.0.865         106,768  Trantcp.dll
	  20-Jun-2002  08:36  5.0.0.865          49,424  Turnaround.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	SNA Server 4.0
	--------------
	
	No fix is available at this time.
	
	
	WORKAROUND
	==========
	
	There is no way to work around this problem. However, you can disable idle
	timeout on the COM+ application that is hosting the COMTI component to greatly
	reduce the chance of experiencing this problem. If you disable idle timeout,
	COMTI and the APPC transport DLLs remain loaded in memory and do not have to be
	reloaded when new client requests are received.
	
	STATUS
	======
	
	Host Integration Server 2000
	----------------------------
	
	Microsoft has confirmed that this is a problem in Microsoft Host Integration
	Server 2000.
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4.
	
	MORE INFORMATION
	================
	
	This problem affects COMTI components that use LU 6.2-type Remote Environments.
	The LU 6.2-type Remote Environments that are available in Host Integration
	Server 2000 are as follows:
	
	- CICS LINK using LU6.2
	
	- CICS using LU6.2
	
	- IMS using LU6.2
	
	The COMTI events that are listed in the "Symptoms" section may also be logged for
	other reasons. Most frequently, these errors may be logged if COMTI has trouble
	loading the APPC transport DLLs because of a path problem. Typical path problems
	may include the following:
	
	- The HISROOT\System directory is not contained in the path.
	
	- The HISROOT\System directory is located too far down in the path.
	
	- Third-party DLLs with the same names exist in a directory that is higher in
	  the path statement than the HISROOT\System directory.
	
	
	Additional query words: stress initial
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
