---
layout: page
title: "Q311481: BETA-PRB: CGI Code That Calls External Applications May Fail"
permalink: /kb/311/Q311481/
---

## Q311481: BETA-PRB: CGI Code That Calls External Applications May Fail

{% raw %}

	Article: Q311481
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-2001
	
	This article discusses a beta test product not yet released by
	Microsoft. Please feel free to familiarize yourself with this
	product, test it, and report problems to Microsoft.
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use anonymous authentication and you call external programs (including
	PHP programs) from Common Gateway Interface (CGI) code, the operation may fail.
	
	CAUSE
	=====
	
	In Internet Information Services (IIS), the IUSR_<computer_name>
	(anonymous) account is explicitly denied access to all executable programs in
	the %windir%\System32 folder for security reasons. This denial causes CGI code
	that attempts to run these external programs in the anonymous security context
	to fail.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the IUSR denial access control list (ACL) on the
	necessary command-line tools (such as Cmd.exe) that are located in
	\%windir%\System32, and grant the IUSR account Read and Execute access.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install PHP 4.0 on IIS 6.0.
	
	2. Associate the .php extension in IIS 6.0 with the Php.exe CGI application. To
	  do this, follow these steps:
	
	  a. Open the IIS MMC.
	
	  b. Open the property sheet for the Web site to which you want to add the PHP.
	
	  c. On the Home Directory tab, click Configuration.
	
	  d. Under Application Mappings, click Add.
	
	  e. For Executable, type the path to Php.exe (for example, C:\Php\Php.exe).
	
	  f. For Extension box, type ".php" (without the quotation marks) and click OK.
	
	  g. Save your changes and exit the MMC.
	
	3. In Notepad, save the following code as Test.php:
	
	NOTE: For this code to work, IUSR must have Read and Execute access to Ping.exe.
	
	  <?php
	  $output = `ping localhost`;
	  echo $output;
	  ?>
	
	4. Save the file in the Web site publishing point.
	
	5. Call the file from a Web browser (for example,
	  http://<localhost>/test.php).
	
	Additional query words: IIS PHP CGI
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis600
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
