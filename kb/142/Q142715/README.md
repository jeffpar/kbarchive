---
layout: page
title: "Q142715: Anonymous or Specific User Logon Returns HTTP/1.0 500 Error"
permalink: /kb/142/Q142715/
---

## Q142715: Anonymous or Specific User Logon Returns HTTP/1.0 500 Error

{% raw %}

	Article: Q142715
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following HTTP Server error is returned for your user logon request:
	
	  HTTP/1.0 500 Server Error (Logon failure: the user has not been granted the
	  requested logon type at this computer. )"
	
	CAUSE
	=====
	
	Frequently this error means that your user (also Anonymous user) does not have
	the "Log On Locally" user right.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	Method 1
	--------
	
	1. In the Microsoft Internet Service Manager open the WWW Service Properties.
	
	2. For Anonymous user, verify the Anonymous Logon Username and Password.
	
	3. Verify that the username and password in the WWW Service Properties has an
	  identical username and password used in User Manager.
	
	4. Run User Manager to verify the local logon rights for your designated user.
	
	Method 2
	--------
	
	Run the Microsoft Internet Service Manager to change your anonymous or specific
	logon user to an account that does have local logon rights. Verifying the same
	username and password as used in User Manager.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0
	
	=============================================================================
	

{% endraw %}
