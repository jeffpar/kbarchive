---
layout: page
title: "Q313559: HOW TO: Install and Use the Web Application Stress (WAS) Tool"
permalink: /kb/313/Q313559/
---

## Q313559: HOW TO: Install and Use the Web Application Stress (WAS) Tool

{% raw %}

	Article: Q313559
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - How to Install the Web Application Stress Tool
	- How to Create Test Scripts
	
	   - How to Create a Script Manually
	- How to Create a Script by Recording Browser Activity
	
	   - How to Configure the Microsoft WebTool Service
	- How to Record Browser Activity
	
	- How to Create a Script from an IIS Log
	- How to Create a Script from Web Site Content
	
	- How to Configure Your Scripts
	- How to Test Your Web Program
	- How to View Reports of Your Tests
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to install the Microsoft Web Application
	Stress (WAS) tool and how to use WAS to create and run scripts to test your Web
	programs.
	
	The WAS tool is a simulation tool that you can use to place your Microsoft
	Internet Information Services (IIS) 5.0 Web server under a simulated load. The
	tool is designed to reproduce realistically an environment in which multiple
	browsers request pages from a Web site. Use WAS to gather performance data about
	your Web programs and to evaluate the performance and stability of your Web
	server. WAS uses scripts to simulate a large number of requests by using a
	relatively small number of clients; therefore, it creates a scenario that is as
	close to a production environment as possible. You can analyze the data that you
	collect to understand how your Web program responds under stress and to identify
	and eliminate any issues in your program before you deploy it.
	
	How to Install the Web Application Stress Tool
	----------------------------------------------
	
	NOTE: You must perform the following procedures on client computers. WAS is
	supported on Microsoft Windows NT 4.0 Service Pack 4 (SP 4) and later and
	Microsoft Windows 2000. Do not install WAS on the Web server that you are
	testing. If you do so, the WAS installation may affect the performance of the
	Web server and may interfere with your test results.
	
	1. Log on to your computer as an administrator or as a member of the
	  Administrators group.
	
	2. Download WAS. To do so, start your browser and go to the following Microsoft
	  Web site:
	
	  Web Application Stress Tool (http://webtool.rte.microsoft.com)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	3. In the left pane of the Web page, click Download.
	
	4. Click "Download Web Application Stress tool, x86 version", click "Save this
	  program to disk", and then click OK.
	
	5. Specify a location where you want to save the Setup.exe file, and then click
	  Save.
	
	6. Copy the Setup.exe file to each of the client computers from which you want
	  to perform the test.
	
	7. On each client computer, start Microsoft Windows Explorer, and then
	  double-click the Setup.exe file that you saved in step 5.
	
	8. Click Yes to accept the license agreement, either accept the default
	  installation location or specify where you want to install WAS, and then
	  click Next.
	
	9. Click OK, and then click Finish.
	
	How to Create Test Scripts
	--------------------------
	
	To create scripts to test your Web program, use one of the following methods.
	
	How to Create a Script Manually :
	
	To create a script manually:
	
	1. Click Start, point to Programs, point to "Microsoft Web Application Stress
	  Tool", and then click "Microsoft Web Application Stress Tool".
	
	2. Point to Create on the Scripts menu, and then click Manual.
	
	  The script is displayed as "New Script" in the left pane. To change the name
	  of your new script, click New Script, and then type a new name for the
	  script.
	
	3. In the Server box in the right pane, type either the name, the fully
	  qualified domain name (FQDN), or the Internet protocol (IP) address of your
	  Web server.
	
	4. Type a description in the Notes box.
	
	5. Under Verb, click the down arrow in the first cell, and then either click the
	  Hypertext Transfer Protocol (HTTP) verb that you want to use (for example,
	  GET) or type the verb that you want to use in the cell.
	
	6. Under Path, type the name and the path of the Web page, for example,
	  "/scripts/test.asp" (without the quotation marks).
	
	  NOTE: Do not include the server name.
	
	7. If you want to use page groups, make the appropriate changes under Group.
	
	8. If you want to specify a wait time between script items, type a delay value
	  (in milliseconds) under Delay. The default value is 0 (zero).
	
	9. Repeat steps 5 through 8 to add additional items to your script.
	
	How to Create a Script by Recording Browser Activity:
	
	To create a script by recording browser activity, use the procedure described in
	this section.
	
	NOTE: If you are using a proxy server, you must configure the Microsoft WebTool
	service to log on to your user account first. If you are not using a proxy
	server, go directly to the Step 2: Record Browser Activity section of this
	article.
	
	How to Configure the Microsoft WebTool Service
	
	If you are using a proxy server, configure the Microsoft WebTool service to log
	on to your user account. To do so:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Administrative Tools, and then double-click Services.
	
	3. Double-click WebTool, and then click the Log On tab.
	
	4. Under "Log on as", click "This account", and then type your user name using
	  the following format:
	
	  "\\<Domain>\<UserName>" (without the quotation marks)
	
	5. Type and confirm your password in the appropriate boxes, and then click OK.
	
	6. Right-click WebTool, and then click Stop.
	
	7. Right-click WebTool, and then click Start.
	
	8. Close the Services dialog box, and then close the Administrative Tools dialog
	  box.
	
	How to Record Browser Activity
	
	1. Start Microsoft Internet Explorer.
	
	2. Click Internet Options on the Tools menu, and then click the General tab.
	
	3. Under "Temporary Internet files", click Delete Files.
	
	4. Click the Connections tab.
	
	5. In the "Dial-up settings" box, click your dial-up networking connection, and
	  then click Settings.
	
	6. Under "Automatic configuration", click to clear the "Automatically detect
	  settings" check box (if it is selected).
	
	7. Under "Proxy server", click to select the "Use a proxy server" check box,
	  type "localhost" (without the quotation marks) in the Address box, and then
	  type "8000" (without the quotation marks) in the Port box.
	
	8. Click to clear the "Bypass proxy server for local addresses" check box (if it
	  is selected).
	
	9. Click OK twice, and then quit Internet Explorer.
	
	10. Click Start, point to Programs, point to "Microsoft Web Application Stress
	  Tool", and then click "Microsoft Web Application Stress Tool".
	
	11. Point to Create on the Scripts menu, and then click Record.
	
	12. Click to select the check boxes next to the settings that you want to
	  record, click Next, and then click Finish.
	
	13. After Internet Explorer starts, type the Uniform Resource Locator (URL) of
	  the Web site that you want to test in the Address bar, and then press ENTER.
	
	14. Browse to the pages on the Web site that you want to test.
	
	  The paths of the pages that you browse to are listed in the WAS recording
	  window.
	
	15. When you are finished, click Stop Recording.
	
	  The script is displayed as "New Recorded Script" in the left pane. To change
	  the name of your new script, click New Recorded Script, and then type a new
	  name for the script.
	
	How to Create a Script from an IIS Log:
	
	To create a script from an IIS log:
	
	1. Click Start, point to Programs, point to "Microsoft Web Application Stress
	  Tool", and then click "Microsoft Web Application Stress Tool".
	
	2. Point to Create on the Scripts menu, and then click Log.
	
	3. In the "Log file" box, click Browse to locate the IIS log that you want to
	  use to create the script, click Open, and then click Next.
	
	4. Click the options with which you want to parse the log file, and then click
	  Finish.
	
	  The script is displayed as "<LogFile>.log" in the left pane, where
	  <LogFile>.log is the name of the IIS log file. To change the name of
	  your new script, click <LogFile>.log, and then type a new name for the
	  script.
	
	How to Create a Script from Web Site Content:
	
	To create a script from files on your Web site, follow these steps:
	
	1. Click Start, point to Programs, point to "Microsoft Web Application Stress
	  Tool", and then click "Microsoft Web Application Stress Tool".
	
	2. Point to Create on the Scripts menu, and then click Contents.
	
	  The script is displayed as "New Script" in the left pane. To change the name
	  of your new script, click New Script, and then type a new name for the
	  script.
	
	3. Click the plus sign (+) next to the script to expand the tree (if it is not
	  already expanded).
	
	  The script items are displayed in the script tree.
	
	4. Click Content Tree.
	
	5. In the "Content location" box in the right pane, either type the path to your
	  content folder or click Browse to locate the folder, and then click OK.
	
	6. If necessary, type a virtual root placeholder in the "Virtual root" box.
	
	7. Click Apply.
	
	  WAS creates a content tree based on your Web content. Click to select the
	  check boxes next to the files that you want to include in your test.
	
	How to Configure Your Scripts
	-----------------------------
	
	To configure settings for your scripts:
	
	1. Click Start, point to Programs, point to "Microsoft Web Application Stress
	  Tool", and then click "Microsoft Web Application Stress Tool".
	
	2. In the left pane, double-click <ScriptName>, where <ScriptName>
	  is the name of your script, to expand the tree (if it is not already
	  expanded).
	
	  The script items are displayed in the right pane.
	
	3. Double-click the row header of the script item (the blank button on the left
	  side of the Verb column) that you want to configure.
	
	  When you do so, the script Details view is opened. You can use this view to
	  edit querystring name-value pairs, customize Post data, modify HTTP headers,
	  enable Secure Sockets Layer (SSL) encryption, or format your script as a
	  Remote Data Service (RDS) query.
	
	4. Click the appropriate tab to specify the settings that you want, and then
	  click OK.
	
	5. In the left pane, click Settings.
	
	  Specify the settings that you want to set for the script options that are
	  displayed in the Settings dialog box. For example, you can modify the stress
	  level values, set the test run time, or turn on bandwidth throttling.
	
	6. To add performance monitor counters to your script, click Perf Counters,
	  click Add Counter in the right pane, click the object and the counters that
	  you want to add, click Add, and then click OK.
	
	7. To view a list of page groups that are defined for that script or to change
	  page group distribution, click Page Groups.
	
	8. To add and to remove users from the default population or to create a new
	  population, click Users, double-click Default in the right pane, and then
	  perform one of the following steps:
	
	   - To add new users, type the following information in the appropriate boxes,
	     and then click Create:
	
	      - The number of users that you want to create
	
	      - The user name prefix
	
	      - The password
	
	   - To add a new population, right-click Default in the left pane, and then
	     click Add.
	
	     The new population is displayed as "New Population" in the left pane. To
	     change the name of the new population, click New Population, and then type
	     a new name.
	
	9. Click Scripts on the View menu to return to the Scripts view.
	
	10. To add and to remove client computers from the current group or to add new
	  groups of client computers, click Clients, and then click Default in the
	  right pane.
	
	   - To add a client computer, type the name of the computer (or its IP
	     address) in the "Machine name" box, and then click Add.
	
	   - To add a new group, right-click Default in the left pane, and then click
	     Add. The new group is displayed as "New Group" in the left pane. To change
	     the name of the new group, click New Group, and then type a new name.
	
	11. Click Scripts on the View menu to return to the Scripts view.
	
	12. To view cookies that are stored with each user, click Cookies.
	
	How to Test Your Web Program
	----------------------------
	
	To run a test using a script, follow these steps:
	
	1. Click Start, point to Programs, point to "Microsoft Web Application Stress
	  Tool", and then click "Microsoft Web Application Stress Tool".
	
	2. In the left pane, click the script that you want to use, and then click Run
	  on the Scripts menu.
	
	How to View Reports of Your Tests
	---------------------------------
	
	To view reports of your tests, follow these steps:
	
	1. Click Start, point to Programs, point to "Microsoft Web Application Stress
	  Tool", and then click "Microsoft Web Application Stress Tool".
	
	2. Click Reports on the View menu.
	
	  Reports for each test that you perform are displayed under its associated
	  script in the left pane. The title of a report is the date and time when you
	  started the test.
	
	3. Double-click a report to expand the tree (if it is not already expanded).
	
	4. Click the item in the report tree in which you want to view more information,
	  for example, Page Summary.
	
	  Detailed information about that item is displayed in the right pane.
	
	Troubleshooting
	---------------
	
	- You are unable to start WAS.
	
	  This behavior can occur if the WebTool service is not running. To resolve this
	  behavior, make sure that the WebTool service is running. To do so:
	
	  1. Click Start, point to Programs, point to Accessories, and then click
	     Command Prompt.
	
	  2. At the command prompt, type "net start webtool" (without the quotation
	     marks), and then press ENTER.
	
	  3. To display a list of services that are currently running, type "net start"
	     (without the quotation marks), and then press ENTER.
	
	     Verify that WebTool is displayed in the list.
	
	- You are unable to add or connect to client computers.
	
	  This behavior can occur if any of the following conditions are true:
	
	   - The client computer is not a Windows NT 4.0-based or a Windows 2000-based
	     computer. To resolve this behavior, install WAS on a Windows NT-based or a
	     Windows 2000-based computer.
	
	     -or-
	
	   - WAS is not installed on the client computer. To resolve this behavior,
	     install WAS on the client computers to which you want to connect.
	
	     -or-
	
	   - The WebTool service is not running on the client computer in which WAS is
	     installed. To resolve this behavior, start the WebTool service on the
	     client computers to which you want to connect.
	
	     -or-
	
	   - You are not a member of the local Administrators group on the client
	     computers to which you want to connect. To resolve this behavior, log on
	     by using a user account that is a member of the local Administrators group
	     on each client computer to which you want to connect.
	
	For additional information about how to troubleshoot WAS, refer to the
	"Troubleshooting" section in WAS Help. Click "Web Application Stress Help" on
	the Help menu, click the Contents tab, and then double-click Troubleshooting.
	
	REFERENCES
	==========
	
	For additional information about how to use the WAS tool, click "Web Application
	Stress Help" on the Help menu to view WAS Help.
	
	For additional information about the WAS tool, visit the following Microsoft Web
	site:
	
	  Microsoft Web Application Stress Tool (http://webtool.rte.microsoft.com/)
	
	For additional information about WAS and other tools that are available for
	testing your Web server, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q231282 INFO: Stress Tools to Test Your Web Server
	
	For additional information about resources for installing and using IIS, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q266115 Resources for Installing and Using IIS 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
