---
layout: page
title: "Q313131: HOW TO: Use URLScan with Exchange Outlook Web Access in Exchange"
permalink: kb/313/Q313131/
---

## Q313131: HOW TO: Use URLScan with Exchange Outlook Web Access in Exchange

	Article: Q313131
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Configure URLScan.ini to Support Outlook Web Access
	- Troubleshooting
	
	SUMMARY
	=======
	
	This article explains how IIS administrators can use the URLScan tool to secure
	their Web servers against a variety of known and unknown attacks. The URLScan
	ISAPI filter screens inbound requests to the Web server. The filter uses rules
	(configured by the administrator) to block requests that contain potentially
	dangerous strings that could compromise a Web server.
	
	The URLScan.ini file includes the default URLScan settings. These default
	settings assume that the Web server serves static Web pages such as HTML files
	and images and also ASP pages. Features that are not supported by the default
	URLScan.ini configuration file include:
	
	- Outlook Web Access (OWA)
	
	- Front Page Server Extensions
	
	- WebDAV
	
	- Microsoft Index Server
	
	- Internet Printing Protocol
	
	- Server-Side Includes
	
	Configure URLScan.ini to Support Outlook Web Access
	---------------------------------------------------
	
	After you install the URLScan tool and configure the tool on an Outlook Web
	Access (OWA) server, mail, calendar, and contact items may not appear. To
	restore OWA functionality, you must configure the URLScan.ini file to support
	OWA:
	
	1. Start Windows Explorer, and then browse to
	  %SystemRoot%\System32\Inetsrv\Urlscan.
	
	2. Right-click the URLScan.ini file, and then click Open.
	
	3. If the Open With dialog box appears, click Notepad, and then click OK.
	
	4. Configure the URLScan.ini file to include the following entries:
	
	  [Options] 
	  UseAllowVerbs=1 
	  UseAllowExtensions=0 
	  NormalizeUrlBeforeScan=1 
	  VerifyNormalization=1 
	  AllowHighBitCharacters=1 
	  AllowDotInPath=1
	  RemoveServerHeader=0 
	  EnableLogging=1 
	  PerProcessLogging=0 
	  AllowLateScanning=0 
	
	  [AllowVerbs]
	  GET 
	  POST 
	  SEARCH 
	  POLL 
	  PROPFIND 
	  BMOVE 
	  BCOPY 
	  SUBSCRIBE 
	  MOVE 
	  PROPPATCH 
	  BPROPPATCH 
	  DELETE 
	  BDELETE 
	  MKCOL
	
	  [DenyVerbs]
	  ; Deny verbs are empty when supporting OWA
	
	  [DenyHeaders]
	  ; the Translate header is removed from the default settings
	  If: 
	  Lock-Token: 
	
	  ;[AllowExtensions]
	  ; Remove or comment out the AllowExtensions section
	
	  [DenyExtensions]
	  ; remove the .htr extension to support Change Password functionality 
	  .asp 
	  .cer 
	  .cdx 
	  .asa
	  .exe 
	  .bat 
	  .cmd 
	  .com 
	  .htw 
	  .ida 
	  .idq 
	  .htr 
	  .idc 
	  .shtm 
	  .shtml 
	  .stm 
	  .printer 
	  .ini 
	  .log 
	  .pol 
	  .dat 
	
	  [DenyUrlSequences] 
	  .. 
	  ./ 
	  \ 
	  % 
	  &
	
	Troubleshooting
	---------------
	
	It is vitally important that you update your Web servers with the latest security
	patches. This is even more important if you need to use any of the features in
	the preceding list. You can find the most recent security patches at the
	following Microsoft Web site:
	
	  www.microsoft.com/technet/security
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
