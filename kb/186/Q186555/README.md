---
layout: page
title: "Q186555: Terminal Server Error Messages: 2200 to 2299"
permalink: /kb/186/Q186555/
---

## Q186555: Terminal Server Error Messages: 2200 to 2299

{% raw %}

	Article: Q186555
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes Terminal Server error messages 2200 to 2299.
	
	MORE INFORMATION
	================
	
	Error 2200
	----------
	
	  This workstation is already logged on to the local-area network.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A user is already
	logged on at this workstation.
	
	Action: To see who is currently logged on at the workstation, type:
	
	  "NET CONFIG WORKSTATION" (without the quotation marks)
	
	Error 2201
	----------
	
	  The workstation is not logged on to the local-area network.
	
	Error 2202
	----------
	
	  The user name or group name parameter is invalid.
	
	Explanation: You specified an invalid user name or group name.
	
	Action: Use a different user name or group name.
	
	Error 2203
	----------
	
	  The password parameter is invalid.
	
	Explanation: You specified an invalid password.
	
	Action: Use a valid password.
	
	Error 2204
	----------
	
	  The logon processor did not add the message alias.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Your user name was
	not added as a new message alias for one of the following reasons:
	
	- The Messenger service is not started on your workstation.
	
	- Your user name and your workstation's computer name are the same, and your
	  workstation's computer name is already a message alias.
	
	- Your user name is in use as a message alias on another computer on the
	  network. In this case, you cannot receive messages at the local workstation
	  using this name.
	
	Action: Start the Messenger service on your workstation if it is not already
	started. Then use the NET NAME command to add your user name as a message alias.
	If your user name is being used as a message alias on another computer, delete
	the alias on that computer. Then use the NET NAME command to add your user name
	as a message alias on this computer.
	
	Error 2205
	----------
	
	  The logon processor did not add the message alias.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Your user name is
	already established as a message alias. Either your user name and computer name
	are the same, or your user name is in use as a message alias on another computer
	on the network. If your user name is being used as a message alias on another
	computer, you cannot receive messages at the local workstation using this name.
	
	Action: If your user name is being used as a message alias on another computer,
	delete the alias on that computer. Then log on again at this computer.
	
	Error 2206
	----------
	
	  The logoff processor did not delete the message alias.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The message alias
	corresponding to your user name was not deleted. Either your user name is the
	same as the computer name, or your user name is being used as a message alias on
	some other network computer.
	
	Action: No action is needed.
	
	Error 2207
	----------
	
	The logoff processor did not delete the message alias.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The message alias
	corresponding to your user name was not deleted because your user name is the
	same as the computer name.
	
	Action: No action is needed.
	
	Error 2208
	----------
	
	NOTE: Error 2208 is not a valid error message.
	
	Error 2209
	----------
	
	  Network logons are paused.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. An administrator
	has paused the Netlogon service. No one can log on until the Netlogon service is
	continued.
	
	Action: The administrator must continue the Netlogon service by typing the
	following command:
	
	  "NET CONTINUE NETLOGON" (without the quotation marks)
	
	Error 2210
	----------
	
	  A centralized logon-server conflict occurred.
	
	Explanation: You cannot start the Netlogon service on this server because a
	server in the domain with an earlier version the software is running the
	Netlogon service.
	
	Action: Before you can start the Netlogon service on this server, you must stop
	the Netlogon service on all servers in the domain running earlier versions of
	the software.
	
	Error 2211
	----------
	
	  The server is configured without a valid user path.
	
	Error 2212
	----------
	
	  An error occurred while loading or running the logon script.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The logon script
	for your account may contain unrecognized commands or commands that could not
	run.
	
	Action: Ask your network administrator to review your logon script.
	
	Error 2214
	----------
	
	  The logon server was not specified. Your computer will be logged on as
	  STANDALONE.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The logon was not
	validated by a logon server.
	
	Action: No action is needed.
	
	Error 2215
	----------
	
	  The logon server could not be found.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. No domain
	controller is responding to your command.
	
	Action: See your network administrator.
	
	Error 2216
	----------
	
	  There is already a logon domain for this computer.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. This workstation
	already has a logon domain established.
	
	Action: To log on in a different domain, you must first log off from the current
	domain and then log on again to a different domain.
	
	Error 2217
	----------
	
	  The logon server could not validate the logon.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Your logon server
	is running an earlier version of LAN Manager.
	
	Action: No action is needed.
	
	Error 2219
	----------
	
	  The security database could not be found.
	
	Explanation: Windows NT could not find the security database file.
	
	Action: Copy the backup version of the file.
	
	Error 2220
	----------
	
	  The group name could not be found.
	
	Explanation: You specified an unknown group name.
	
	Action: Check the spelling of the group name. To display a list of the groups in
	the security database, type:
	
	  "NET GROUP" (without the quotation marks)
	
	Error 2221
	----------
	
	  The user name could not be found.
	
	Explanation: You specified an unknown user name.
	
	Action: Check the spelling of the user name. To display a list of the users in
	the security database, type:
	
	  "NET USER" (without the quotation marks)
	
	Error 2222
	----------
	
	  The resource name could not be found.
	
	Explanation: You tried to access the permissions for a resource that has no
	permissions assigned to it.
	
	Action: Check the spelling of the resource's name. Before you can assign user
	permissions for a particular resource, you must create a record of that resource
	in the database of resource permissions.
	
	Error 2223
	----------
	
	  The group already exists.
	
	Explanation: You tried to create a group with a group name that already exists.
	
	Action: Use a different group name for the new group. To display a list of group
	names established on the server, type:
	
	  "NET GROUP" (without the quotation marks)
	
	Error 2224
	----------
	
	  The user account already exists.
	
	Explanation: You tried to create a user account with a user name that already
	exists.
	
	Action: Use a different user name for the new user account. To display a list of
	existing user names, type:
	
	  "NET USER" (without the quotation marks)
	
	Error 2225
	----------
	
	  The resource permission list already exists.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You tried to create
	an access record for a resource that already has one.
	
	Action: To view or change permissions for this resource, use the Permissions
	editor from File Manager.
	
	Error 2226
	----------
	
	  This operation is only allowed on the primary domain controller of the
	  domain.
	
	Explanation: The specified server is not the domain controller, so you cannot
	update its security database.
	
	Action: Run the command on the domain controller. If you are using User Manager,
	set the focus on the domain controller, and then retry the command.
	
	Error 2227
	----------
	
	  The security database has not been started.
	
	Explanation: The security database is not active. This database must be active
	for the command to run.
	
	Action: The security database should have started when the Workstation service
	started. Check the error log with Event Viewer to determine why the database did
	not start.
	
	Error 2228
	----------
	
	  There are too many names in the user accounts database.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The user accounts
	database is full.
	
	Action: Make space in the database by deleting users, groups, and resource
	permissions.
	
	Error 2229
	----------
	
	  A disk I/O failure occurred.
	
	Explanation: A software error occurred while Windows NT tried to access a
	down-level security database file.
	
	Action: Type the command again. If the error persists, use a backup copy of the
	security database from a server and try the command again. If the error
	persists, your disk drive may have hardware problems.
	
	Error 2230
	----------
	
	  The limit of 64 entries per resource was exceeded.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Each resource can
	have no more than 64 access records defined.
	
	Action: Put the users into groups and specify permissions for the groups, rather
	than for each user.
	
	Error 2231
	----------
	
	  Deleting a user with a session is not allowed.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The user currently
	has a session with the server.
	
	Action: The session must be ended before you can delete a user.
	
	Error 2232
	----------
	
	  The parent directory could not be located.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. No permissions have
	been assigned for the parent directory.
	
	Action: Your network administrator must assign permissions for this resource.
	
	Error 2233
	----------
	
	  Unable to add to the security database session cache segment.
	
	Explanation: The security database has reached its size limit. Nothing can be
	added to it.
	
	Action: No action is needed.
	
	Error 2234
	----------
	
	  This operation is not allowed on this special group.
	
	Explanation: You cannot perform this task on special groups such as Users,
	Administrators, and Guests.
	
	Action: No action is needed.
	
	Error 2235
	----------
	
	  This user is not cached in user accounts database session cache.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2236
	----------
	
	  The user already belongs to this group.
	
	Explanation: The user you are trying to add to this group is already a member.
	
	Action: No action is needed.
	
	Error 2237
	----------
	
	  The user does not belong to this group.
	
	Explanation: This user is not a member of this group.
	
	Action: To see a list of users in this group, type:
	
	  " NET GROUP groupname" (without the quotation marks)
	
	Error 2238
	----------
	
	  This user account is undefined.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. A software error
	occurred.
	
	Action: Contact technical support.
	
	Error 2239
	----------
	
	  This user account has expired.
	
	Explanation: Only an administrator can access an expired account.
	
	Action: The administrator must reinstate this account before the action you
	specified can be taken.
	
	Error 2240
	----------
	
	  The user is not allowed to log on from this workstation.
	
	Explanation: You are not allowed to log on from this workstation.
	
	Action: If you need to log on from this workstation, have your network
	administrator change the logon workstation(s) listed in your account.
	
	Error 2241
	----------
	
	  The user is not allowed to log on at this time.
	
	Explanation: You are not allowed to log on at this time of day.
	
	Action: If you need to log on, have your network administrator change the logon
	hours listed in your account.
	
	Error 2242
	----------
	
	  The password of this user has expired.
	
	Explanation: Your password has expired. You will not be able to perform any
	network tasks until you change your password.
	
	Action: To change your password, press CTRL+ALT+DELETE, and then select Change
	Password.
	
	Error 2243
	----------
	
	  The password of this user cannot change.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You cannot change
	your password.
	
	Action: See your network administrator if you want your password changed.
	
	Error 2244
	----------
	
	  This password cannot be used now.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You cannot use a
	password that has just expired. Your network administrator may also have
	configured your account so that you cannot use any of your previous passwords.
	
	Action: Change your password to one that you have not used before.
	
	Error 2245
	----------
	
	  The password is shorter than required.
	
	Explanation: The password you specified is not long enough.
	
	Action: Use a longer password. See your network administrator to find the
	required length for passwords on your system.
	
	Error 2246:
	-----------
	
	  The password of this user is too recent to change.
	
	Explanation: You cannot change your password again for a certain length of time.
	
	Action: No action is needed. See your network administrator to find the length of
	time that you must use your current password.
	
	Error 2247
	----------
	
	  The security database is corrupted.
	
	Explanation: The security database is damaged.
	
	Action: Restore the security database from a backup.
	
	Error 2248
	----------
	
	  No updates are necessary to this replicant network/local security database.
	
	Explanation: This message should occur only on a down- level computer. Any action
	to correct the problem should be performed on that computer. A server requested
	an update of the user accounts database, even though no update was required.
	
	Action: No action is needed.
	
	Error 2249
	----------
	
	  This replicant database is outdated; synchronization is required.
	
	Explanation: The local server's security database is completely out of
	synchronization with that of the domain controller, so a complete
	synchronization is needed.
	
	Action: Use the Synchronize With Domain option in Server Manager to synchronize
	the local server's database with that of the domain controller.
	
	Error 2250
	----------
	
	  The network connection could not be found.
	
	Explanation: This network connection does not exist.
	
	Action: To display a list of shared resources to which your computer is
	connected, type:
	
	  "NET USE" (without the quotation marks)
	
	Error 2251
	----------
	
	  This asg_type is invalid.
	
	Explanation: A software error occurred.
	
	Action: Contact technical support.
	
	Error 2252
	----------
	
	  This device is currently being shared.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The device name you
	have tried to assign to a shared resource represents a local device that is
	already being shared.
	
	Action: Select another device name or stop sharing the device you specified.
	
	Error 2270
	----------
	
	  The computer name could not be added as a message alias. The name may already
	  exist on the network.
	
	Explanation: A software error occurred.
	
	Action: Contact technical support.
	
	Error 2271
	----------
	
	  The Messenger service is already started.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You tried to start
	the Messenger service, but it is already running.
	
	Action: No action is needed. If this error occurs often, contact technical
	support.
	
	Error 2272
	----------
	
	  The Messenger service failed to start.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The initialization
	sequence of the Messenger service failed, so the service could not start.
	
	Action: Check the error log for error messages related to the Messenger service
	failing to start. This problem may be caused by the way your workstation or
	server is configured, or by hardware or software errors.
	
	Error 2273
	----------
	
	  The message alias could not be found on the network.
	
	Explanation: This message alias could not be located.
	
	Action: Check the spelling of the message alias. If it is correct, then the
	computer that is to receive your message may be busy. Try sending the message
	again later.
	
	Error 2274
	----------
	
	  This message alias has already been forwarded.
	
	Error 2275
	----------
	
	  This message alias has been added but is still forwarded.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Messages for this
	alias are being forwarded to another computer.
	
	Action: Stop forwarding messages and allow messages to be received by the local
	computer again.
	
	Error 2276
	----------
	
	  This message alias already exists locally.
	
	Explanation: You tried to add a message alias that already exists on this
	computer.
	
	Action: Use a different name if you want to add a new message alias. To display
	the list of aliases on this computer, type:
	
	  "NET NAME" (without the quotation marks)
	
	Error 2277
	----------
	
	  The maximum number of added message aliases has been exceeded.
	
	Explanation: The maximum number of message aliases on each computer is limited by
	the system hardware. You have reached this limit. This limit also affects the
	number of other domains you can specify with the OTHDOMAINS option of the NET
	CONFIG WORKSTATION command.
	
	Action: To find the limit for your system, see your hardware documentation or ask
	your administrator. To display a list of current message aliases, type:
	
	  "NET NAME" (without the quotation marks)
	
	To delete a message alias to make room for a new message alias or another domain
	specified by the OTHDOMAINS option, type:
	
	  "NET NAME alias /DELETE" (without the quotation marks)
	
	Error 2278
	----------
	
	  The computer name could not be deleted.
	
	Explanation: You cannot delete a message alias that is also a computer name.
	
	Action: No action is needed.
	
	Error 2279
	----------
	
	  Messages cannot be forwarded back to the same workstation.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. You cannot forward
	a message to yourself at your own workstation.
	
	Action: No action is needed.
	
	Error 2280
	----------
	
	  An error occurred in the domain message processor.
	
	Explanation: An error occurred when the workstation was receiving or processing a
	domain-wide message.
	
	Action: Check the workstation's Event log, by selecting System from the Log menu
	using Event Viewer. Stop and restart the Messenger service. If the problem
	persists, contact technical support.
	
	Error 2281
	----------
	
	  The message was sent, but the recipient has paused the Messenger service.
	
	Explanation: The person receiving your message has paused the Messenger service,
	so your message could not be received.
	
	Action: Send your message again later. If the error persists, see your network
	administrator.
	
	Error 2282
	----------
	
	  The message was sent but not received.
	
	Explanation: The remote workstation was unable to receive your message. The
	Workstation or Messenger service may not be running on that workstation, it may
	have been receiving another message as yours arrived, or its message buffer may
	be too small.
	
	Action: Send your message again later. If the error persists, see your network
	administrator.
	
	Error 2283
	----------
	
	  The message alias is currently in use. Try again later.
	
	Explanation: The computer to which you tried to send a message was receiving
	another message. A computer can receive only one message at a time.
	
	Action: Send the message again later.
	
	Error 2284
	----------
	
	  The Messenger service has not been started.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The Messenger
	service must be running for you to use this command.
	
	Action: To start the Messenger service, type:
	
	  "NET START MESSENGER" (without the quotation marks)
	
	Error 2285
	----------
	
	  The name is not on the local computer.
	
	Explanation: You tried to delete a message alias that is not on your computer.
	
	Action: To display a list of aliases on your computer and to check the spelling
	of the aliases, type:
	
	  "NET NAME" (without the quotation marks)
	
	Error 2286
	----------
	
	  The forwarded message alias could not be found on the network.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. This alias no
	longer exists on the workstation that was receiving the alias's forwarded
	messages. The alias may have been deleted at that workstation, or the
	workstation may have been restarted.
	
	Action: Restart the workstation or add the alias to the workstation again.
	
	Error 2287
	----------
	
	  The message alias table on the remote station is full.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. The workstation to
	which you are trying to forward the message alias has no room for new aliases.
	
	Action: Ask the user on that workstation if an existing alias can be deleted so
	yours can be added, or forward your alias to a different workstation.
	
	Error 2288
	----------
	
	  Messages for this alias are not currently being forwarded.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. Messages for this
	alias are not being forwarded.
	
	Action: No action is needed.
	
	Error 2289
	----------
	
	  The broadcast message was truncated.
	
	Explanation: The broadcast message was too long. Only the first 128 characters of
	the message were sent.
	
	Action: Keep broadcast messages to 128 characters or less.
	
	Error 2294
	----------
	
	  This is an invalid device name.
	
	Explanation: You typed a command or ran a program that specified an invalid
	device name.
	
	Action: If you specified the device name, be sure that it is valid and that you
	have typed it correctly. If a program specified the device name, consult the
	program's documentation.
	
	Error 2295
	----------
	
	  A write fault occurred.
	
	Explanation: This message should occur only on a down-level computer. Any action
	to correct the problem should be performed on that computer. LAN Manager found
	an error when writing to the message log file.
	
	Action: Contact your network administrator.
	
	Error 2297
	----------
	
	  A duplicate message alias exists on the network.
	
	Explanation: The name you specified is already in use as a message alias on the
	network.
	
	Action: Use a different name.
	
	Error 2298
	----------
	
	  This message alias will be deleted later.
	
	Explanation: Some hardware configurations have a delay between the typing of a
	command and the deletion of an alias.
	
	Action: No action is needed. The deletion will occur soon.
	
	Error 2299
	----------
	
	  The message alias was not successfully deleted from all networks.
	
	Explanation: The message alias could not be deleted from all networks of which
	this computer is a member. This should cause no problems.
	
	Action: If this error occurs frequently, contact technical support.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
