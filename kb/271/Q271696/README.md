---
layout: page
title: "Q271696: SMS: Smsapm32 Creates Large &quot;Complete&quot; Job Files on Clients"
permalink: /kb/271/Q271696/
---

## Q271696: SMS: Smsapm32 Creates Large &quot;Complete&quot; Job Files on Clients

{% raw %}

	Article: Q271696
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbSoftwareDist kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers that have the Systems Management Server (SMS) Advertised Programs
	client agent installed may experience sluggish performance, with a lot of memory
	allocated to Smsapm32.exe (as viewed by using Performance Monitor or Task
	Manager). Files in the <Windows>\Ms\Sms\Clicomp\Apa\Data\Complete folder
	may be large (larger than 10 KB) and contain repeated instances of inactive
	advertisements.
	
	CAUSE
	=====
	
	This problem occurs if both of the following conditions exist:
	
	- A specific program has more than one Advertisement.
	
	- One or more of the advertisements has expired.
	
	The Advertised Programs client agent (Smsapm32) improperly writes information
	about the expiration of an advertised program repeatedly to files in the
	Complete folder. Smsapm32 uses the information from the files in this folder to
	identify which advertisements have already run or expired. As the files grow
	larger, more memory is allocated to track the associated data, and client
	performance may be reduced.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	WORKAROUND
	==========
	
	To work around this issue, do not create multiple advertisements of the same
	package/program combination and then subsequently expire one or more of them.
	Instead, if an advertisement is expired, delete it before creating a new
	advertisement for the same program.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Smsapm32 writes a Complete file to the
	<Windows>\Ms\Sms\Clicomp\Apa\Data\Complete folder when it has successfully
	run a program from an advertisement. The Complete file is an indicator that the
	program ran; it prevents the program from run again. Smsapm32 reads the contents
	of the Complete folder to determine if the offers available to the client have
	been run.
	
	Below is a sample instance of inactive advertisement list exhibiting the problem
	of duplicates, resulting in excessive memory use and processor utilization by
	SMSAPM32.EXE. Note the duplication of instance data:
	
	  
	
	  {
	    instance of Advertisement
	    {
	         AdvertID = "AAA20009";
	         ODP = "System";
	         Site = "AAA";
	    };
	    instance of Advertisement
	    {
	         AdvertID = "AAA20009";
	         ODP = "System";
	         Site = "AAA";
	    };
	    instance of Advertisement
	    {
	         AdvertID = "AAA20009";
	         ODP = "System";
	         Site = "AAA";
	    };
	    instance of Advertisement
	    {
	         AdvertID = "AAA20009";
	         ODP = "System";
	         Site = "AAA";
	    };
	    ...
	
	In addition, we may also get multiple ODPKey instances. The following is an
	excerpt from a complete file with this problem:
	
	  
	
	  instance of Active Advert List
	  {
	       PackageId = "MS000176";
	       instance of ODPKeyList
	       {
	               instance of ODPKey
	               {
	                       ODP = "System";
	                       Site = "MS0";
	               };
	               instance of ODPKey
	               {
	                       ODP = "System";
	                       Site = "MS0";
	               };
	               instance of ODPKey
	               {
	                       ODP = "System";
	                       Site = "MS0";
	               };
	
	Note that the multiple instances of ODPKey may also cause high CPU utilization on
	the client from the SMSAPM32.EXE process, and large amounts of network traffic.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbSoftwareDist kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2
	Version           : :2.0,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
