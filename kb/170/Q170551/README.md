---
layout: page
title: "Q170551: ADT/ODE: Transporter and Synchronizer Can't Share Log File"
permalink: /kb/170/Q170551/
---

## Q170551: ADT/ODE: Transporter and Synchronizer Can't Share Log File

{% raw %}

	Article: Q170551
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	
	SYMPTOMS
	========
	
	When you start Microsoft Replication Manager, you may receive the following
	error message:
	
	  Sharing Violation while attempting to open log file <path to log file>
	  in Deny Write mode.
	
	This is followed by the following error, depending on which version you are
	using.
	
	  
	
	  In Microsoft Replication Manager 3.5:
	
	  Microsoft Replication Manager can't start the Synchronizer. Without the
	  Synchronizer running, no synchronization of data can occur.
	
	  Do you want to work without the Synchronizer?
	
	  Synchronizer could not be initialized.
	
	  In Microsoft Replication Manager 3.0:
	
	  Microsoft Replication Manager can't start the Transporter. Without the
	  Transporter running, no synchronization of data can occur.
	
	  Do you want to work without the Transporter?
	
	  Transport could not be initialized.
	
	CAUSE
	=====
	
	You are trying to run Transporter and Synchronizer at the same time, and both
	are configured to use the same log file.
	
	RESOLUTION
	==========
	
	Reconfigure either Transporter or Synchronizer to use a different log file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access Developer's
	Toolkit 7.0 and Microsoft Office 97 Developer Edition Tools.
	
	MORE INFORMATION
	================
	
	When Synchronizer and Transporter start, they attempt to open their log files
	for write access, and deny write access to other applications. If Synchronizer
	and Transporter are configured to use the same log file, the first application
	started can successfully access the log file for this mode. However, this
	prevents the second application from accessing the file in the same mode, and an
	error occurs during startup.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Microsoft Replication Manager 3.0.
	
	2. On the Tools menu, click Configure Microsoft Replication Manager.
	
	3. Add a managed folder if one is not in the list, and then click Next. The
	  folder you select does not need to contain any replicas.
	
	4. Select a shared network folder for indirect synchronizations, and then click
	  Next.
	
	5. In the "Path to Log File" box, type:
	
	  " C:\My Documents\Transporter.log" (without the quotation marks)
	
	  Click Finish. Transporter will start on your computer.
	
	6. On the File menu, click Exit and Stop Transporter.
	
	7. Start Microsoft Replication Manager 3.5.
	
	8. On the Tools menu, click Configure Microsoft Replication Manager.
	
	9. Click Next.
	
	10. Click to select the Support Indirect Synchronization check box, and then
	  click Next.
	
	11. Click Next.
	
	12. Select a shared Network folder for indirect synchronizations, and then click
	  Next.
	
	13. Click No to indicate that your computer is not an Internet server, and then
	  click Next.
	
	14. In the "Path to Log File" box, type:
	
	  " C:\My Documents\Transporter.log" (without the quotation marks)
	
	  Note that this is the same path selected for the log file in step 5.
	
	15. Click Finish. Synchronizer will start on your computer.
	
	16. Quit Microsoft Replication Manager 3.5. Do not stop Synchronizer.
	
	17. Start Microsoft Replication Manager 3.0. Note that you receive the errors
	  described in the "Symptoms" section.
	
	REFERENCES
	==========
	
	For more information about the Synchronizer log file, search the Microsoft
	Replication Manager Help Index for "log, Synchronizer."
	
	Additional query words: can t
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
