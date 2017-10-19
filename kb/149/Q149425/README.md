---
layout: page
title: "Q149425: IDC: Error Performing Query, Not Defined as a Valid User"
permalink: /kb/149/Q149425/
---

## Q149425: IDC: Error Performing Query, Not Defined as a Valid User

	Article: Q149425
	Product(s): Internet Information Server
	Version(s): 1.0 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access an IDC script, you may receive the following error message:
	
	  Error Performing Query
	  *[State=3700][Error=18450][Microsoft][ODBC SQL Driver][SQL Server]
	  Login failed- User: _ Reason: Not defined as a valid user of a
	  trusted SQL Server Connection.
	
	CAUSE
	=====
	
	The error message above may occur in the following conditions:
	
	- Your SQL Server is not the same computer as your Internet Information Server
	  (IIS).
	
	- You are using Microsoft Windows NT Challenge/Response authentication on IIS.
	
	- You are using Integrated or Mixed Security on the Microsoft SQL Server.
	
	- You are not are not providing the Username: or Password: values in your IDC
	  Script.
	
	WORKAROUND
	==========
	
	There are two possible workarounds:
	
	- Install SQL Server on the same computer as the Internet Information Server
	  and set up your ODBC System DSN to be Local Server instead or a remote
	  computer name.
	
	  -or-
	
	- Use Basic Authentication instead of Windows NT Challenge/Response (for
	  example, the user will be prompted to login using a dialog box)
	
	MORE INFORMATION
	================
	
	When the client executes the IDC script, IIS must determine whether the
	datasource is local or remote. If the datasource defined as Local System, the
	query is passed to the SQL Server on the same computer. If the datasource is
	remote, IIS must make a network connection to SQL Server. When it does, it does
	not pass the credentials of user logged on to the client computer; instead, it
	passes a blank username and password.
	
	The SQL Server tries to validate a user without a username; it fails, and it
	returns the following message to IIS:
	
	  Login failed- User: _ Reason: Not defined as a
	  valid user of a trusted SQL Server Connection
	
	The Internet Information Server then passes the results of the query to the
	client web browser.
	
	Additional query words: prodiis winnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0 3.51
	
	=============================================================================
	
