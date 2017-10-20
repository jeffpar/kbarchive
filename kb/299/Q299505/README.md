---
layout: page
title: "Q299505: How to Deploy Passport Across Several Computers in a Cluster"
permalink: /kb/299/Q299505/
---

## Q299505: How to Deploy Passport Across Several Computers in a Cluster

{% raw %}

	Article: Q299505
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to deploy Passport across several computers in a
	cluster. To do this, you first configure a single server to use your Production
	Site ID and to run against the proper Nexus configuration information for
	Production, and then install and configure Passport on the other servers in the
	cluster.
	
	MORE INFORMATION
	================
	
	To deploy Passport across several computers in a cluster, follow these steps:
	
	1. Run the Passport Manager Administration utility on the server. Be aware of
	  the following:
	
	   - You must complete the Site ID field to match your Production Site ID.
	
	   - You must make any desired site-wide changes to method defaults or Disaster
	     URLs.
	
	   - If you specify a path or domain for reading and writing Passport cookies,
	     you may need to change this path to match the site's domain when live.
	     Also, make sure that this same path is used to delete the cookies within
	     your site's cookie delete script.
	
	2. Click Commit Changes to save the changes and configure the site.
	
	3. Copy your Web page code that makes Passport Manager API calls onto the server
	  so that you can test this server in isolation before you continue.
	
	4. Restart the server.
	
	5. Test the server against the live Production environment while it is still
	  isolated from your site's gateway, load balancing, name resolution, or other
	  production considerations that would otherwise allow users to make requests
	  against that server. Make sure that your code behaves the same way in
	  Production as it did in PREP.
	
	NOTE: You may need to test by using a client that has a modified HOSTS file so
	that normal name resolution is skirted. For more information, see the following
	Microsoft Passport SDK Web site:
	
	  Hosts, IP Addresses, and Testing
	  http://www.passport.com/sdkdocuments/sdk14/default.htm?Reference%2FOperations%2Fhosts.htm
	
	6. Using this server as a baseline, install the Passport Manager object to all
	  other servers in the cluster by using the /s command line options when
	  running the extracted version of the original SDK installation executable
	  file. For more information, see the following Passport SDK Web site:
	
	  Deploying Passport Manager to Servers
	  http://www.passport.com/sdkdocuments/sdk14/default.htm?reference%2Foperations%2Fppmsetup.htm
	
	7. Using the Passport Manager Administration utility, export the configuration
	  information from the baseline server to the other servers in the cluster. For
	  more information, see the following Passport SDK Web site:
	
	  Passport Manager Administration Utility
	  http://www.passport.com/sdkdocuments/sdk14/default.htm?Reference%2Foperations%2FPassport_Admin.htm
	
	8. Run the key installation executable file remotely against other servers in
	  the cluster, or physically run the key installation executable file on each
	  server. This is required because part of the local encryption of the key is
	  computer-specific. For specific instructions for installing the encryption
	  key, including instructions for remote installation, see the "Installing the
	  Production Encryption Key" page of the Passport DevInfo Web site:
	
	  http://www.passport.com/devinfo/Other_Key.asp
	
	For a full reference of all possible command line options that are included in
	the key installation executable file, see the following Passport SDK Web site:
	
	  Installing the Encryption Key
	  http://www.passport.com/sdkdocuments/sdk14/default.htm?Implementation/enckey.htm
	
	9. Migrate your Web page code that implements Passport code from the first
	  server to all other servers in the live cluster.
	
	10. Open up gateways, turn on name resolutions, or otherwise enable access to
	  the newly deployed server cluster code, and begin rollout or full-scale
	  testing.
	
	Additional query words: IIS, encryption key, remote, remotely, installation
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
