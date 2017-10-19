---
layout: page
title: "Q197817: IIS4.0 Logs Incorrect Value for Time Taken in W3C Extended Log"
permalink: /kb/197/Q197817/
---

## Q197817: IIS4.0 Logs Incorrect Value for Time Taken in W3C Extended Log

	Article: Q197817
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When IIS logging format is set to W3C Extended Log File Format, you can
	customize the format using the Extended Property page in the Extended Log
	Property sheet. If you select the Time Taken option, IIS will log the time to
	perform the action for every log entry in the time-taken column in the log
	file.
	
	The time logged by IIS for the Time Taken option is not accurate. The time
	reported for the same file and from the same browser is inconsistent.
	
	CAUSE
	=====
	
	IIS depends on the next request to come in for logging the results of the
	current request. If you do not have any activity between IIS and the client
	browser for a while, IIS will wait until a "connection time out" and then log
	the results.
	
	NOTE: IIS calculates the time-taken based on the staring time of the request and
	the time when the logging is performed.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size    File Name     Platform
	  -------------------------------------------------------------
	  12/18/98  02:46p   27,696  Admwprox.dll   (x86)
	  12/18/98  02:48p  327,472  Asp.dll        (x86)
	  12/18/98  02:46p   43,456  Coadmin.dll    (x86)
	  12/18/98  02:47p   11,168  Ftpctrs2.dll   (x86)
	  12/18/98  02:47p   81,376  Ftpsvc2.dll    (x86)
	  12/18/98  02:47p   55,392  Httpodbc.dll   (x86)
	  12/18/98  02:46p   10,224  Iisfecnv.dll   (x86)
	  12/18/98  02:46p   61,920  Iislog.dll     (x86)
	  12/18/98  02:46p   16,848  Infoadmn.dll   (x86)
	  12/18/98  02:46p  184,208  Infocomm.dll   (x86)
	  12/18/98  02:46p    9,584  Infoctrs.dll   (x86)
	  12/18/98  02:46p   47,936  Isatq.dll      (x86)
	  12/18/98  02:46p   29,520  Iscomlog.dll   (x86)
	  12/18/98  02:47p   11,248  Iwrps.dll      (x86)
	  12/18/98  02:46p   13,856  Lonsint.dll    (x86)
	  12/18/98  02:46p    8,336  Lonsiw95.dll   (x86)
	  12/18/98  02:46p   71,232  Metadata.dll   (x86)
	  12/18/98  02:46p    7,488  Rpcref.dll     (x86)
	  12/18/98  02:46p   12,592  Spud.sys       (x86)
	  12/18/98  02:46p   18,032  Svcext.dll     (x86)
	  12/18/98  02:47p   14,752  W3ctrs.dll     (x86)
	  12/18/98  02:47p  227,424  W3svc.dll      (x86)
	  12/18/98  02:47p   87,504  Wam.dll        (x86)
	
	  12/18/98  02:48p   49,424  Admwprox.dll   (Alpha)
	  12/18/98  02:50p  548,112  Asp.dll        (Alpha)
	  12/18/98  02:48p   77,072  Coadmin.dll    (Alpha)
	  12/18/98  02:50p   17,168  Ftpctrs2.dll   (Alpha)
	  12/18/98  02:50p  126,224  Ftpsvc2.dll    (Alpha)
	  12/18/98  02:49p   89,360  Httpodbc.dll   (Alpha)
	  12/18/98  02:49p   17,680  Iisfecnv.dll   (Alpha)
	  12/18/98  02:49p  110,864  Iislog.dll     (Alpha)
	  12/18/98  02:49p   25,872  Infoadmn.dll   (Alpha)
	  12/18/98  02:49p  302,864  Infocomm.dll   (Alpha)
	  12/18/98  02:49p   15,120  Infoctrs.dll   (Alpha)
	  12/18/98  02:48p   82,704  Isatq.dll      (Alpha)
	  12/18/98  02:49p   45,840  Iscomlog.dll   (Alpha)
	  12/18/98  02:49p   16,656  Iwrps.dll      (Alpha)
	  12/18/98  02:48p   23,312  Lonsint.dll    (Alpha)
	  12/18/98  02:48p   13,584  Lonsiw95.dll   (Alpha)
	  12/18/98  02:48p  131,856  Metadata.dll   (Alpha)
	  12/18/98  02:48p   12,048  Rpcref.dll     (Alpha)
	  12/18/98  02:49p   20,912  Spud.sys       (Alpha)
	  12/18/98  02:49p   29,456  Svcext.dll     (Alpha)
	  12/18/98  02:49p   21,264  W3ctrs.dll     (Alpha)
	  12/18/98  02:49p  381,712  W3svc.dll      (Alpha)
	  12/18/98  02:49p  149,264  Wam.dll        (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	Additional query words: IIS hotfix hot fix qfe quick fix engineering patch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
