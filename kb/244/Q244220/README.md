---
layout: page
title: "Q244220: Computer Stops Responding When Creating IIS Server Instance"
permalink: kb/244/Q244220/
---

## Q244220: Computer Stops Responding When Creating IIS Server Instance

	Article: Q244220
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new IIS Server Instance on a computer running Microsoft
	Cluster Server version 1.0 with Service Pack 5 installed, Cluster Server stops
	responding when you click the Finish button at the end of the IIS Server
	Instance Creation Wizard.
	
	CAUSE
	=====
	
	This problem is caused by a problem in the Clusiis4.dll file included with
	Service Pack 5.
	
	WORKAROUND
	==========
	
	1. From the original Windows NT Option Pack (NTOP) compact disc, obtain the
	  Clusiis4.dll file (Clusiis4.dll version 4.02.0622 31KB 11/16/97) located in
	  the Iis4_01.cab file.
	
	2. Open a Command Prompt.
	
	3. Change the directory to \Winnt\System32\Inetsrv.
	
	4. Type "regsvr32 /u clusiis4.dll" (without the quotation marks).
	
	5. Rename "Clusiis4.dll" to "Clusiis4.sp5" (without the quotation marks).
	
	6. Copy the original Clusiis4.dll file from the NTOP to the directory.
	
	7. Type "regsvr32 clusiis4.dll" (without the quotation marks).
	
	8. Restart the cluster node that you updated.
	
	9. Repeat steps 2 through 8 on the second cluster node.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbClustServSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
