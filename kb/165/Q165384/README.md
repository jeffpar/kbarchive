---
layout: page
title: "Q165384: HOWTO: How to Change the User Password Remotely and from Batch F"
permalink: kb/165/Q165384/
---

## Q165384: HOWTO: How to Change the User Password Remotely and from Batch F

	Article: Q165384
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change a password remotely and how to change a
	collection of user passwords from a batch file.
	
	MORE INFORMATION
	================
	
	Currently, a user's password can be changed in any of the following ways:
	
	- Use User Manager to change a user's password.
	
	- Press CTRL+ALT+DELETE, and then click Change Password while you are logged on
	  to the computer.
	
	- Type the following command from a member server or workstation in the domain:
	
	  net user <username> <password>
	
	The sample code below can be compiled with Microsoft Visual C++ and returns,
	through the standard output, the result of the change password request using
	standard message formats.
	
	CPW.C
	+++++
	
	Demonstrate the use of NetUserChangePassword to change the password for a
	specific user account.
	
	Microsoft provides examples of Visual C++ code for illustration only, without
	warranty either expressed or implied, including, but not limited to the implied
	warranties of merchantability and/or fitness for a particular purpose. The
	Visual C++ code in this article are provided "as is" and Microsoft does not
	guarantee that they can be used in all situations. While Microsoft Technical
	Support (MTS) Engineers can help explain the functionality, they will not modify
	these examples to provide added functionality, nor will they help you construct
	programs to meet your specific needs. If you have limited programming
	experience, you may want to consult one of the Microsoft Solution Providers.
	Solution Providers offer a wide range of fee-based services, including creating
	custom programs. For more information about Microsoft Solution Providers, call
	Microsoft Customer Information Service at (800) 426-9400 or your local Microsoft
	Subsidiary.
	
	Limitations:
	Passwords are exposed.
	Standard error checking on the output NET_STATUS_API.
	Does not support blank passwords.
	
	   // start of code
	
	   #include <stdio.h>
	   #include <string.h>
	   #include <windows.h>
	   #include <LMACCESS.H>
	   #include <WINNT.H>
	   #include <LMCONS.H>
	
	   #define MAX_LENGTH 32
	   #define MAX_MSG_BUF_SIZE 32768
	
	   int main(int argc, char *argv[])
	   {
	        // DNLEN, UNLEN and PWLEN are constants from LMCONS.H
	   int changePasswordStatus;   // buffer for the change password result
	   WCHAR domainname[DNLEN+1];  // buffer for the domain or workstation name
	   WCHAR username[UNLEN+1];    // buffer for the user name
	   WCHAR oldpassword[PWLEN+1]; // buffer for the old password
	   WCHAR newpassword[PWLEN+1]; // buffer for the new password
	   CHAR *msgBuf;               // buffer for message text from system
	   int msgOutPut;              // buffer to capture the result of
	                               // FormatMessage for
	                              // future use
	
	   // determine whether the number of parameters is correct
	   // if not then display the proper syntax
	
	   if (argc < 2 || argc > 5)
	   {
	      printf ("The syntax of the command is incorrect.\n");
	      printf ("\ncpw domainname username oldpassword newpassword\n");
	      return 0;
	   }
	
	   //convert all of the parameters from ANSI to UNICODE
	
	   MultiByteToWideChar(
	       CP_ACP,               // code page
	       0,           // character-type options
	       argv[1],        // address of string to map
	       strlen(argv[1])+1,    // number of characters in string inc null!!
	       (LPWSTR)&domainname,  // address of wide-character buffer
	       sizeof(domainname)    // size of buffer
	      );
	
	   MultiByteToWideChar(
	       CP_ACP,       // code page
	       0,            // character-type options
	       argv[2],         // address of string to map
	       strlen(argv[2])+1,  // number of characters in string inc null!!
	       (LPWSTR)&username,     // address of wide-character buffer
	       sizeof(username)       // size of buffer
	      );
	
	   MultiByteToWideChar(
	       CP_ACP,       // code page
	       0,            // character-type options
	       argv[3],         // address of string to map
	       strlen(argv[3])+1,      // number of characters in string inc null!!
	       (LPWSTR)&oldpassword,  // address of wide-character buffer
	       sizeof(oldpassword)    // size of buffer
	      );
	
	   MultiByteToWideChar(
	       CP_ACP,       // code page
	       0,            // character-type options
	       argv[4],         // address of string to map
	       strlen(argv[4])+1,     // number of characters in string inc null!!
	       (LPWSTR)&newpassword,  // address of wide-character buffer
	       sizeof(newpassword)    // size of buffer
	      );
	
	            // NetUserChangePassword expects UNICODE
	            // which is why we used the MultiByteToWideChar
	            // to convert from ANSI to UNICODE.
	
	   changePasswordStatus = NetUserChangePassword(
	      domainname, // pointer to server or domain name string
	      username,   // pointer to user name string
	      oldpassword,   // pointer to old password string
	      newpassword // pointer to new password string
	     );
	
	            // FormatMessage is beyond the scope of this
	            // article for detailed information on the use of
	            // FormatMessage, please refer to the on-line
	            // Documentation in Microsoft Visual C++
	
	   msgOutPut = FormatMessage(FORMAT_MESSAGE_FROM_SYSTEM |
	         FORMAT_MESSAGE_ALLOCATE_BUFFER | FORMAT_MESSAGE_IGNORE_INSERTS |
	         40, NULL, changePasswordStatus, MAKELANGID(LANG_ENGLISH,
	         SUBLANG_ENGLISH_US), (LPTSTR) &msgBuf, MAX_MSG_BUF_SIZE,
	         NULL
	        );
	
	   printf("\n%s\n", msgBuf);
	         // Print the error message generated by FormatMessage
	
	   }
	   // end of code (do not include this line in the actual code)
	
	Additional query words: NetUserChangePassword change password
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
