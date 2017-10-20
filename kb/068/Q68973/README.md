---
layout: page
title: "Q68973: Mac Hyp: HyperCard 2.0 Compatibility"
permalink: /kb/068/Q68973/
---

## Q68973: Mac Hyp: HyperCard 2.0 Compatibility

{% raw %}

	Article: Q68973
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	HyperCard version 2.0 contains new features that are incompatible with the
	Microsoft Mail HyperCard Software Development Kit (SDK) version 2.0. The
	HyperCard SDK for Mail version 2.00 is fully compatible with HyperCard versions
	1.2.x.
	
	The following compatibility problems may be encountered between the Mail
	HyperCard SDK and HyperCard version 2.0:
	
	1. Either of the following commands: msmail(DisplayMessageCenter) or
	  msmail(DisplayAddressScreen) will cause a System error to occur.
	
	  To work around this problem, use the msmail(GetUserList) command to access the
	  user list and then use the Ask command to select the user. This in effect
	  simulates the Address Mail window.
	
	2. When the Mail HyperCard SDK is used with beta versions of HyperCard version
	  2.0, the Msmail() command works only the first time it is called. All
	  subsequent calls are ignored.
	
	  To correct this problem, use a retail version of HyperCard.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
